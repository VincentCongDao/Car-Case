"use client";
import { CarCard, CustomFilter, Hero, Searchbar, ShowMore } from "@/components";
import SmoothScroll from "@/components/SmoothScroll";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 12,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <SmoothScroll to="discover">
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 12) / 12}
              isNext={(searchParams.limit || 12) > allCars.length}
            />
          </SmoothScroll>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, all the cars are out driving
              <p>{allCars?.message}</p>
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
