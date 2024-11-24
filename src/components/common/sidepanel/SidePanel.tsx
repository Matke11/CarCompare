import React from "react";
import "./SidePanel.css";
import { CarCardType } from "@/data/global.types";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCars: CarCardType[];
  handleRemoveCar: (car: CarCardType) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({
  isOpen,
  onClose,
  selectedCars,
  handleRemoveCar,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="overlay"
          aria-hidden={!isOpen}
          onClick={onClose}
          role="presentation"
          style={{ pointerEvents: !isOpen ? "none" : "auto" }}
        ></div>
      )}

      <aside
        className={`side-panel ${isOpen ? "open" : "closed"}`}
        aria-hidden="true"
        role="complementary"
        aria-label="Car Comparison Side Panel"
      >
        {isOpen && (
          <button
            onClick={onClose}
            className="close-button"
            aria-label="Close Comparison Panel"
            aria-hidden="true"
          >
            ✖
          </button>
        )}

        <div
          className="fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out w-full p-6 overflow-y-auto shadow-lg"
          role="complementary"
          aria-labelledby="comparison-panel-title"
        >
          <header className="side-panel-header text-center">
            <h2 id="comparison-panel-title">Compare Cars</h2>
          </header>

          {selectedCars.length > 0 ? (
            <div className="car-comparison-grid">
              {selectedCars.map((car) => (
                <div key={car.id} className="car-card">
                  <button
                    onClick={() => handleRemoveCar(car)}
                    className="remove-car-card"
                    aria-label="Remove Car From Comparison"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <img
                    src={car.image || "https://via.placeholder.com/150"}
                    alt={`${car.make} ${car.model}`}
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                  <h3>
                    {car.make} {car.model}
                  </h3>
                  <ul>
                    <li>
                      <span>Engine:</span> {car.engine}
                    </li>
                    <li>
                      <span>Fuel Type:</span> {car.fuelType}
                    </li>
                    <li>
                      <span>Horsepower:</span> {car.horsepower} hp
                    </li>
                    <li>
                      <span>Color:</span> {car.color}
                    </li>
                    <li>
                      <span>Mileage:</span> {car.mileage.toLocaleString()} miles
                    </li>
                    <li>
                      <span>Transmission:</span> {car.transmission}
                    </li>
                    <li>
                      <span>Year:</span> {car.year}
                    </li>
                    <li>
                      <span>Owners:</span> {car.owners}
                    </li>
                    <li className="price">
                      <span>Price:</span> ${car.price.toLocaleString()}
                    </li>
                    <li className="rating">
                      <span>Rating:</span> {car.rating} / 5
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-cars-selected text-center">
              <h3 role="alert" aria-live="polite" className="no-cars-message">
                <span className="visually-hidden">
                  No cars selected for comparison.
                </span>
                Please select cars for comparison.
              </h3>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default SidePanel;
