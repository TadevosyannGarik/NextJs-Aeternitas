"use client";

import { Badge } from "@/components/ui/badge";


export const SocketIndicator = () => {
    return (
        <Badge 
            variant="outline" 
            className="bg-emerald-600 text-white border-none text-sm rounded-sm"
        >
            Live: Real-time updates
        </Badge>
    )
}