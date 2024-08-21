import {NextResponse} from 'next/server'
import OpenAI from 'openai'

const systemPrompt = 'Welcome to this AI chat support built by Team xyz.'

export async function POST(req){
    const openai = new OpenAI()
    const data = await req.json()
    // console.log(data)

    const completion = await openai.chat.completions.create({
        messages: [{role: 'system', content: systemPrompt}, ...data],
        model: 'gpt-4o-mini',
    })

    // console.log()
    return NextResponse.json(
        {message: completion.choices[0].message.content},
        {status: 200},
        )
}