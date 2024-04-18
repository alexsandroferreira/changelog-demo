/* eslint-disable @typescript-eslint/no-unused-vars */
import { FastifyRequest, FastifyReply } from 'fastify'
export function verifyUserRole() {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    console.log('rule example')
  }
}
