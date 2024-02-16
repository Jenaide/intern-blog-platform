import { NextResponse } from 'next/server';
import prisma from '../../utils/connect';
import { getAuthSession } from '../../utils/auth';


// get all comments
export const GET = async (req, res) => {
    const { searchParams } = new URL(req.url);
    const postMessage = searchParams.get('postMessage');
    
    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postMessage && { postMessage }),
            },
            include: { user: true },
        });
        return new NextResponse(JSON.stringify(comments, { status: 200 }));
    } catch (err) {
        return new NextResponse(
            JSON.stringify({ message: "An error occured" }, {  status: 500 })
        );
    }
};

// create a new comment
export const POST = async(req, res) => {
    const session = await getAuthSession();

    if (!session){
        return new NextResponse(
            JSON.stringify({ message: 'Not Authenticated' }, { status: 500 })
        );
    }

    try {
        const body = await request.json();
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email },
        })
        return new NextResponse(
            JSON.stringify(comment, { status: 200 }),
        )
    } catch (err) {
        return new NextResponse({ message: "An error occurred"}, { status: 500 })
    }
};