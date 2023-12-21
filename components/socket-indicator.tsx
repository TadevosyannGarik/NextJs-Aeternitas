"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {

    return (
        <Badge 
            variant="outline" 
            className="bg-emerald-600 text-white border-none rounded-md text-sm"
        >
            Live: Real-time updates
        </Badge>
    )
}