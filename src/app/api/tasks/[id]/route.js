import { NextResponse } from "next/server"
import {prisma} from '@/libs/prisma'


export async function POST (request){
    try {
        const {title, description} = await request.json()
        const newTask = await prisma.task.create({
            data:
            {
                title,
                description
            }
        })
        return NextResponse.json({
            "Response": 'Creating Tasks',
            "Request": newTask
        })
    } catch (error) {
        return NextResponse.json(error.message)
    }
}

export async function GET (request, {params}){
    try {
        const tasks = await prisma.task.findUniqueOrThrow({
            where: {
                id: Number(params.id)
            }
        })
        // console.log(tasks);
        return NextResponse.json({
            "Response": "Reading Tasks",
            "Tasks": tasks
        })
    } catch (error) {
        return NextResponse.json(error.message)
    }
}

export async function PUT (request, {params}){
    try {
        const {title, description} = await request.json()
        const updateTasks = await prisma.task.updateMany({
            where: {
                id: Number(params.id)
            },
            data: {
                title,
                description
            }
        })
        // console.log(updateTasks);
        return NextResponse.json({
            "Response": "Updating Tasks",
            "Tasks": updateTasks
        })
    } catch (error) {
        return NextResponse.json(error.message)
    }
}

export async function DELETE (request, {params}){
    try {
        const deleteTasks = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json({
            "Response": "Deleting Tasks",
            "Tasks": deleteTasks
        })
        
    } catch (error) {
        return NextResponse.json(error.message)
    }
}