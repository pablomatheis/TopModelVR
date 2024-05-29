import {cva, VariantProps} from 'class-variance-authority'
import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

const buttonStyles = cva(['transition-colors'], {
    variants: {
        variant: {
            default: [
                'bg-secondary',
                'hover:bg-secondary-hover'
            ],
            ghost: [
                'hover:bg-secondary-dark',
            ],
            selected: [
                'bg-secondary-themebgblue',
                'text-white'
            ],
            blue_theme: [
                'bg-black',
                'hover:bg-secondary-themebgblueshadow',
                'text-white'
            ]
        },
        size: {
            default: [
                'rounded',
                'p-2'
            ],
            icon: [
                'rounded-full',
                'w-10',
                'h-10',
                'flex',
                'items-center',
                'justify-center',
                'p-2.25',
            ],
        }
    },
    defaultVariants: {
        variant: 'ghost',
        size: 'default',
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

export function Button({size, variant, className, ...props}: ButtonProps) {
    return <button {...props}
                   className={twMerge(buttonStyles({variant, size}), className)}/>
}