import { runFlow } from '@genkit-ai/flow'
import * as dotenv from 'dotenv'
import { summarizeFlow } from '.'

dotenv.config()

const input = process.argv[2]

async function main() {
  const answer = await runFlow(summarizeFlow, input)
  console.log('💖answer', answer)
}

main()
