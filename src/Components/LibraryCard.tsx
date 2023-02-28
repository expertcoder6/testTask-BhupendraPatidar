import { Card, CardContent, Typography } from "@mui/material";
import { libraryProps } from "../Modules/Interfaces";
import '../Pages/LibraryData.css';

const LibraryCard = ({ library }: libraryProps) => {
    return (
        <Card className="library-card">
            <CardContent>
                <Typography variant="body1">Name: <Typography variant="body2" component="span">{library.name}</Typography></Typography>
                <Typography variant="body1">Age: <Typography variant="body2" component="span">{library.age}</Typography></Typography>
                <Typography variant="subtitle1">Address:</Typography>
                <Typography variant="subtitle2">Country: <Typography variant="body2" component="span">{library.address.country}</Typography></Typography>
                <Typography variant="subtitle2">Region: <Typography variant="body2" component="span">{library.address.region}</Typography></Typography>
            </CardContent>
        </Card>
    )
}

export default LibraryCard;