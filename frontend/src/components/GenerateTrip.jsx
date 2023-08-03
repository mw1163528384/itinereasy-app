import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { NewTrip } from '../pages/NewTrip';
import { TypeOfTrip } from '../pages/TypeOfTrip';
import { NewTripDetail } from '../pages/NewTripDetail';
import { NewTripActivities } from '../pages/NewTripActivities';
import { NewTripFood } from '../pages/NewTripFood';
import { NewTripGenerate } from '../pages/NewTripGenerate';

function GenerateTrip() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  let ItineraryQuestionComponent;

  switch (currentIndex) {
    case 0:
      ItineraryQuestionComponent = <NewTrip />
      break;
    case 1:
      ItineraryQuestionComponent = <TypeOfTrip />
      break;
    case 2:
      ItineraryQuestionComponent = <NewTripDetail />
      break;
    case 3:
      ItineraryQuestionComponent = <NewTripActivities />
      break;
    case 4:
      ItineraryQuestionComponent = <NewTripFood />
      break;

    case 5:
      ItineraryQuestionComponent = <NewTripGenerate />
      break;
  }

  return (
    <div>
      <div className='itinerary-generation-container'>
        <button onClick={handleOpenModal} id="addTrip-btn" className='addTrip-btn'>
          <img src={add_ring} alt='add_ring'/>
          Click here to add new trip
          testing testing testing testing
        </button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        >
          {ItineraryQuestionComponent}

        </Modal>
      </div>
    </div>
  );
}

export{ GenerateTrip };