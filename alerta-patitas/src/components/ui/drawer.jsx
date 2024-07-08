/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "../../lib/utils"

const DrawerContext = React.createContext({})

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => (
  <DrawerContext.Provider value={{direction: props.direction}}>
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
  </DrawerContext.Provider>
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed  inset-0 z-40 bg-black/40", className)}
    {...props} />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) =>{ 
  const { direction } = React.useContext(DrawerContext)
  return (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed mt-24  z-50 flex h-auto flex-col bg-white ",
        (!direction || direction === "bottom") && "inset-x-0 bottom-0 mt-24 ",
        direction === "right" && "top-0 right-0 w-screen max-w-60 h-full",
      )}
      {...props}>
        {(!direction || direction === "bottom" &&
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        )}
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
)}) 
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props} />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
