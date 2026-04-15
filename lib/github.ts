interface GitHubFileResponse {
  sha: string
  content: string
  encoding: string
}

interface GitHubUpdateResponse {
  content: {
    name: string
    path: string
    sha: string
  }
}

function getConfig() {
  const token = process.env.GITHUB_TOKEN
  const repo = process.env.GITHUB_REPO
  const branch = process.env.GITHUB_BRANCH || 'main'

  if (!token) throw new Error('GITHUB_TOKEN is not set')
  if (!repo) throw new Error('GITHUB_REPO is not set')

  return { token, repo, branch }
}

export async function getFileSHA(filename: string): Promise<string> {
  const { token, repo, branch } = getConfig()
  const url = `https://api.github.com/repos/${repo}/contents/content/${filename}?ref=${branch}`

  const res = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`GitHub API error fetching ${filename}: ${res.status} ${res.statusText}`)
  }

  const data: GitHubFileResponse = await res.json()
  return data.sha
}

export async function updateContentFile(
  filename: string,
  content: unknown,
  commitMessage?: string
): Promise<void> {
  const { token, repo, branch } = getConfig()
  const url = `https://api.github.com/repos/${repo}/contents/content/${filename}`

  const sha = await getFileSHA(filename)
  const jsonContent = JSON.stringify(content, null, 2)
  const encoded = Buffer.from(jsonContent, 'utf-8').toString('base64')

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: commitMessage || `cms: update ${filename}`,
      content: encoded,
      sha,
      branch,
    }),
    cache: 'no-store',
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`GitHub API error updating ${filename}: ${res.status} ${error}`)
  }

  const data: GitHubUpdateResponse = await res.json()
  if (!data.content?.sha) {
    throw new Error('Unexpected response from GitHub API')
  }
}
