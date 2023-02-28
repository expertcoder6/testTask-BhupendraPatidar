import { Box } from "@mui/system";
import { useState } from "react";
import LibraryCard from "../Components/LibraryCard";
import "./LibraryData.css";

const LibraryData = () => {

    const initialState = {
        name: 'ReactJS',
        age: 10,
        address: {
            country: 'USA',
            region: 'CA'
        }
    }

    const [library, setLibrary] = useState(initialState)

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLibrary((prevState) => ({
            ...prevState,
            address: {
                ...prevState.address, region: event.target.value
            }
        }))
    };

    return (
        <Box className="library-wrapper">
            <label>Please select region: </label>
            <select value={library.address.region} onChange={handleRegionChange}>
                <option value="NY">New York</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
            </select>
            <LibraryCard library={library} />
        </Box>
    )
}

export default LibraryData;