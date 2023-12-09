import React, { useState } from 'react';
import './create.css';
import svg from '../../../../assets/Creative thinking-bro.svg';
import Select from 'react-select';

const Create = () => {
  const cardtype = [
    { value: 'Game Top Up', label: 'Game Top Up' },
    { value: 'Steam', label: 'Steam Gift Card' },
    { value: 'Razer', label: 'Razer Gold' },
    { value: 'Ebay', label: 'eBay Gift Card' },
    { value: 'Amazon', label: 'Amazon Gift Card' },
    { value: 'GooglePlay', label: 'Google Play Gift Card' },
    { value: 'iTunes', label: 'iTunes Gift Card' },
    { value: 'PlayStation', label: 'PlayStation Store Gift Card' },
    { value: 'Xbox', label: 'Xbox Gift Card' },
    { value: 'Netflix', label: 'Netflix Gift Card' },
    { value: 'Starbucks', label: 'Starbucks Gift Card' },
    { value: 'Target', label: 'Target Gift Card' },
    { value: 'Walmart', label: 'Walmart Gift Card' },
    { value: 'BestBuy', label: 'Best Buy Gift Card' },
    { value: 'Dunkin', label: 'Dunkin\' Gift Card' },
  ];

  const options = [
    { value: 'Game Top Up', label: 'Game Top Up' },
    { value: 'Gift Cards', label: 'Gift Cards' },
    { value: 'Video Games', label: 'Video Games' },
    { value: 'Accounts', label: 'Accounts' },
    { value: 'Items', label: 'Items' },
    { value: 'Coaching', label: 'Coaching' },
    { value: 'Software', label: 'Software' },
    { value: 'Coins', label: 'Coins' },
  ];

  const countries = [
    { value: 'Worldwide', label: 'Worldwide' },
    { value: 'Usa', label: 'Usa' },
    { value: 'Uk', label: 'Uk' },
    { value: 'Canada', label: 'Canada' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? 'none' : '1px solid #ccc',
      boxShadow: state.isFocused ? '0 0 5px rgba(0, 123, 255, 0.5)' : 'none',
      '&:hover': {
        border: '2px solid #2AFFE2',
      },
      width: '100%',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#2AFFE2' : state.isHovered ? '#e0f7fa' : 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='create'>
      <img src={svg} className='create-lead-svg' alt="Thinking SVG" />
      <h1 className='create-lead-title'>Publish An Item</h1>

      <div className='create-lead-body'>
        <Select
          options={options}
          styles={customStyles}
          placeholder="Choose a category..."
        />

        <div className='profile-lead-inp'>
          <div className='profile-lead-inp-subcont sojc0'>
            <input type='text' placeholder='Product Name' style={{ width: '100%' }} />
          </div>
        </div>

        <div className='profile-lead-inp'>
          <div className='profile-lead-inp-subcont sojc0'>
            <input type='number' placeholder='Quantity' />
            <input type='number' placeholder='Amount (USD)' />
          </div>
        </div>

        <div className='profile-lead-inp'>
          <Select
            options={cardtype}
            styles={customStyles}
            placeholder="Card Type"
          />
        </div>

     <div className="image-upload-container">
       <input type="file" onChange={handleImageChange} accept="image/*" />
      {image && (
       <div className="image-preview">
         <p>Image Preview:</p> 
         <img src={image} alt="Preview" />
       </div>
     )}
     </div>



        <div className='profile-lead-inp'>
          <div className='profile-lead-inp-subcont sojc0'>
            <div style={{ width: '100%' }}>
              <Select
                options={countries}
                styles={customStyles}
                placeholder="Can Activate in?"
              />
            </div>
            <input type='number' placeholder='Delivery Time (Mins)' />
          </div>
        </div>

        <div>
          <button className="create-footer-btn" style={{ marginLeft: '1em' }}>
            <span style={{ textDecoration: "none" }} id="link">
              Upload Listing
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
