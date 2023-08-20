// pages/api/getOGP.ts
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

interface OGPResponse {
    [key: string]: string;
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const url = searchParams.get('url') as string;
        const response = await axios.get(url);
        const html = response.data;

        const ogTags: OGPResponse = {};
        const meta = html.match(/<meta .+?og:.+?>/gi);
        meta?.forEach((tag: string) => {
            const propertyMatch = tag.match(/property="(.+?)"/i);
            const contentMatch = tag.match(/content="(.+?)"/i);
            if (propertyMatch && contentMatch) {
                const propertyName = propertyMatch[1];
                const contentValue = contentMatch[1];
                ogTags[propertyName] = contentValue;
            }
        });
        return new NextResponse(JSON.stringify(ogTags))
    } catch (error) {
        return new NextResponse(JSON.stringify({}), {status: 500})
    }
};
