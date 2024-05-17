import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({
    className, //props
    children
}: {
    className?: string; //object for props the ? means optional and it will be of the type string.
    children: ReactNode;
}) => {
    return(
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
        {children}
    </div>
    );
};

export default MaxWidthWrapper