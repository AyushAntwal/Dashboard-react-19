import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export default function Loading() {

    return (
        <Backdrop
            open
            sx={(theme) => ({ backgroundColor: '#F3F3F3', zIndex: theme.zIndex.drawer + 1 })}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    );
}