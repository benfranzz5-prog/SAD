import type { Access, FieldAccess } from 'payload'

export const isAdmin: Access = ({ req }) => {
  if (!req.user) return false
  return (req.user as { role?: string }).role === 'admin'
}

export const isAdminOrEditor: Access = ({ req }) => {
  if (!req.user) return false
  const role = (req.user as { role?: string }).role
  return role === 'admin' || role === 'editor'
}

export const isAdminOrSelf: Access = ({ req, id }) => {
  if (!req.user) return false
  const role = (req.user as { role?: string }).role
  if (role === 'admin') return true
  if (id && req.user.id === id) return true
  return false
}

export const isAdminFieldAccess: FieldAccess = ({ req }) => {
  if (!req.user) return false
  return (req.user as { role?: string }).role === 'admin'
}
