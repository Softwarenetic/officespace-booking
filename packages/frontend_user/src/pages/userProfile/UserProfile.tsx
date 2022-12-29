import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import "./UserProfile.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import {useAppSelector} from "../../hooks/redux";
import {Navigate} from "react-router-dom";
import axios from "axios";
import {configs} from "../../config/config";

const UserProfile: React.FC = () => {
    const accessToken = useAppSelector((state) => state.userReducer.accessToken);

    const [inputs, setInputs] = useState({
        name: "",
        surname: "",
        position: "",
        avatar: "",
    });

    const handleChange = (e: any) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await axios.patch(`${configs.baseUrl}/user`, Object.fromEntries(Object.entries(inputs).filter(([_, v]) => v != "")), {headers: {Authorization: `Bearer ${accessToken}`}});
        alert(res.data);
    };


    return !accessToken ? <Navigate to="/login"/> : (
        <Box>
            <Typography variant="h5" mb={3}>
                Settings
            </Typography>
            <Grid container>
                <Grid className="grid_1">
                    <Grid container mt={1.5}>
                        <Grid item xs={3}>
                            <PersonIcon color="disabled" sx={{fontSize: 50}}/>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1" mt={1}>
                                Account
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Paper className="grid_2">
                    <Typography variant="subtitle1">Avatar</Typography>

                    <Grid container mb={1}>
                        <Grid item xs={1}>
                            <AccountCircleIcon color="disabled" sx={{fontSize: 50}}/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="subtitle1" mt={1}>
                                UPLOAD PHOTO
                            </Typography>
                        </Grid>
                    </Grid>

                    <form onSubmit={handleSubmit} autoComplete="off">
                        <Grid container rowSpacing={5} columnSpacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    variant="outlined"
                                    type="text"
                                    value={inputs.name}
                                    onChange={handleChange}
                                    size="small"
                                    error={inputs.name.match(/^[a-zA-Z\-]+$/) === null || inputs.name.length < 3}
                                    fullWidth
                                    required
                                    InputLabelProps={{
                                        sx: {"&.Mui-focused": {color: "text.secondary"}},
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Surname"
                                    name="surname"
                                    variant="outlined"
                                    type="text"
                                    value={inputs.surname}
                                    onChange={handleChange}
                                    size="small"
                                    fullWidth
                                    InputLabelProps={{
                                        sx: {"&.Mui-focused": {color: "text.secondary"}},
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Position"
                                    name="position"
                                    variant="outlined"
                                    type="text"
                                    value={inputs.position}
                                    onChange={handleChange}
                                    size="small"
                                    fullWidth
                                    InputLabelProps={{
                                        sx: {"&.Mui-focused": {color: "text.secondary"}},
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} mt={1}>
                                <Typography color="text.secondary" variant="subtitle2">
                                    Company:
                                </Typography>
                                <Typography variant="subtitle2">Softwarenetic</Typography>
                            </Grid>
                            <Grid item xs={3} mt={2}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    size="small"
                                >
                                    Save changes
                                </Button>
                            </Grid>
                            <Grid item xs={3} mt={2}>
                                <Button variant="outlined" size="small"
                                        onClick={() => alert(JSON.stringify(inputs))}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Box>
    );
};

export default UserProfile;
