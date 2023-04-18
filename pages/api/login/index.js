import { useSession } from 'next-auth/react'
import bcrypt from 'bcrypt'
import users from '../../../db/models/users'
export default async function handler (req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body
    const user = await users.findOne({ where: { email } })
    console.log(user)
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const { data: session } = await useSession()
    session.user = { id: user.id, email: user.email }

    res.status(200).json({ message: 'Login successful' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
