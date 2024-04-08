/*
    Purpose:    provide functioning fields & buttons to the natural burial 
                booking form; accessible & user-friendly.

    Authors:  Alex
              Alison (Group Leader)
              Charis
              Natalie
*/

/**
 * 
 * HTML form's structure using React functions
 * 
 * Author: Alex
 * 
 * @returns 
 */

/*** Personal Information ***/
function InfoForm() {
    return (
        <div className="bg-amber-900 p-4">
            {/* Container for the entire form */}
            <div className="bg-white flex flex-col m-auto w-full border-4 border-black p-4 rounded justify-around overflow-hidden text-3xl"> {/* width: 50% */}
                {/* Personal Information section */}
                <div className="flex flex-row p-4 border-4 border-black p-4 rounded">
                    <div className="flex p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded size-50 self-start">
                        <i className="bi bi-volume-up text-7xl"></i>
                    </div>
                    <div className="flex p-2 text-8xl pl-7 justify-center m-auto">Personal Information</div>
                </div>

                {/* Rows for personal information fields */}
                <div className="flex flex-wrap text-7xl ml-80"> {/* Added wrapper for rows */}
                    <div className="w-full">
                        {/* InfoRowWithInput components for personal information fields */}
                        <InfoRowWithInput label="First and Last name:" placeholder="Type here" />
                        <InfoRowWithInput label="Email:" placeholder="Type here" />
                        <InfoRowWithInput label="Phone Number:" placeholder="Type here" />
                    </div>
                    <div className="w-full ">
                        {/* InfoRowWithInput components for personal information fields */}
                        <InfoRowWithInput label="Street Address:" placeholder="Type here" />
                        <InfoRowWithInput label="Address Line 2:" placeholder="Type here" />
                        <InfoRowWithInput label="Country of Residence:" placeholder="Type here" />
                    </div>
                    <div className="w-full ">
                        {/* InfoRowWithInput components for personal information fields */}
                        <InfoRowWithInput label="City:" placeholder="Type here" />
                        <InfoRowWithInput label="Province:" placeholder="Type here" />
                        <InfoRowWithInput label="Postal Code:" placeholder="Type here" />
                    </div>

                    {/* Choose location section */}
                    <div className="w-full">
                        {/* InfoRow for the "Choose location" label */}
                        <InfoRow label="Choose Location:" placeholder="" />
                    </div>
                    <div className="w-full flex flex-wrap">
                        {/* Radio components for location selection */}
                        <div className="w-3/5 flex items-center space-x-20 m-auto mb-5">
                            <Radio label="Wood" groupName="location" />
                        </div>
                        <div className="w-3/5 flex items-center space-x-20 m-auto mb-5">
                            <Radio label="Field" groupName="location" />
                        </div>
                        <div className="w-3/5 flex items-center space-x-20 m-auto mb-5">
                            <Radio label="Waterside" groupName="location" />
                        </div>
                    </div>

                    {/* Choose container section */}
                    <div className="w-full">
                        {/* InfoRow for the "Choose container" label */}
                        <InfoRow label="Choose Container:" />
                    </div>
                    <div className="w-3/5 flex items-center space-x-20 m-auto mb-5"> {/* Use flex and space-x to display checkboxes inline */}
                        {/* Radio components for container selection */}
                        <Radio label="Biodegradable Box" groupName="container" />
                    </div>
                    <div className="w-3/5 flex items-center space-x-20 m-auto mb-20"> {/* Use flex and space-x to display checkboxes inline */}
                        {/* Radio components for container selection */}
                        <Radio label="Shroud" groupName="container" />
                    </div>

                </div>


            </div>
        </div>
    );
}

// InfoRow component for each row of input
function InfoRow({ label }) {
    return (
        <div className="flex items-start p-4">
            {/* Icon */}
            <div className="flex p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded size-50 self-start">
                <i className="bi bi-volume-up"></i>
            </div>
            {/* Label */}
            <div className="flex flex-col pl-8 w-10/12"> {/* width: 83.33% */}
                <label className="mb-2">{label}</label>
            </div>
        </div>
    );
}

// InfoRow component for each row of input
function InfoRowWithInput({ label, placeholder }) {
    return (
        <div className="flex items-start p-4">
            {/* Icon */}
            <div className="flex p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded size-50 self-start">
                <i className="bi bi-volume-up"></i>
            </div>
            {/* Input field */}
            <div className="flex flex-col pl-8 w-full">
                <label htmlFor="userInput" className="mb-2">{label}</label>
                <input type="text"
                    id="userInput"
                    className="w-6/12 text-blue-700"
                    placeholder={placeholder}
                    style={{ overflowWrap: 'break-word' }} /> {/* width: 50% */}  {/* Insert line breaks within words to prevent overflow  */}
            </div>
        </div>
    );
}

// Radio component for each option
function Radio({ label, checked, onChange, groupName }) {
    return (
        <div className="inline-flex items-center">
            {/* Radio input field: Allows the client to select one option */}
            {/* 'onChange': Updates the component's state to the new value of the radio button */}
            <input
                type="radio"
                id={label.toLowerCase()}
                checked={checked}
                onChange={onChange}
                name={groupName}
                className="appearance-none border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent h-20 w-20 text-blue-600 focus:outline-none"
            />
            {/* Label for radio button */}
            <label htmlFor={label.toLowerCase()} className="ml-2 text-gray-700">{label}</label>
        </div>
    );
}

ReactDOM.render(<InfoForm />, document.getElementById('root'));

/*** End - Personal Information ***/