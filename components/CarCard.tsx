"use client";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { CustomButton } from ".";
import CarDetail from "./CarDetail";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          sizes="(max-width: 640px) 100vw, 640px"
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray-400">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="Gas" />

            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue "
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
