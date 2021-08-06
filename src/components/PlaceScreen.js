import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PlaceList from "./PlaceList.js";

export default function PlaceScreen() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Places</Typography>
        <PlaceList />
      </CardContent>
    </Card>
  );
}
