import { runFlow } from '@genkit-ai/flow'
import { summarizeFlow } from '.'
import * as dotenv from 'dotenv'

dotenv.config()

const input = process.argv[2]

async function main() {
  const answer = await runFlow(summarizeFlow, input)
  console.log('💖answer', answer) // TODO: debug
}

main()
