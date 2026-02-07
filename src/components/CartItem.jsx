import { Card, CardMedia, CardContent, Typography, IconButton, Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem({ item, increase, decrease, remove }) {
  return (
    <Card sx={{ display: "flex", borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        image={item.image}
        sx={{ width: 160 }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography fontWeight="bold">${item.price}</Typography>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
          <IconButton onClick={() => decrease(item.id)}>
            <RemoveIcon />
          </IconButton>
          <Typography>{item.quantity}</Typography>
          <IconButton onClick={() => increase(item.id)}>
            <AddIcon />
          </IconButton>
        </Stack>
      </CardContent>

      <Stack justifyContent="center" pr={2}>
        <Button color="error" onClick={() => remove(item.id)}>
          Remove
        </Button>
      </Stack>
    </Card>
  );
}

export default CartItem;
