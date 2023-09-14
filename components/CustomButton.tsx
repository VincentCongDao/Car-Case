"use client";
import React from "react";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) {
  return (
    <div>
      <button
        disabled={isDisabled}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="right icon"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    </div>
  );
}

export default CustomButton;
