import {Avatar, Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import React, {ChangeEvent, useEffect} from "react";
import "./UserProfile.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import axios from "axios";
import {setName, setPosition, setProfile, setSurname} from "../../store/reducers/ProfileSlice";


const UserProfile: React.FC = () => {
    const {name, position, surname, avatar} = useAppSelector((state) => state.profileReducer);
    const dispatch = useAppDispatch();

    const initProfile = () => {
        axios.get(`/user`).then((res) => {
            dispatch(setProfile(res.data));
        })
    }
    useEffect(() => {
        initProfile()
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (valid(name) && valid(surname) && valid(position)) {
            return alert("Incorrect input");
        }
        const res = await axios.patch(`/user`, {name, surname, position});
        alert(res.data);
    };

    const valid = (text: string) => text.match(/^[a-zA-Z-]+$/) === null && text.length > 2;

    const uploadPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();

        formData.append(
            "avatar",
            e.target.files![0]
        );

        const {data} = await axios.post("user/avatar", formData);
        initProfile()
    }


    return (
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
                            <Avatar src={avatar} color="disabled" sx={{fontSize: 50}}/>
                        </Grid>
                        <Grid item xs={3}>
                            <Button component="label">
                                UPLOAD PHOTO
                                <input onChange={uploadPhoto} hidden accept="image/*" multiple type="file"/>
                            </Button>
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
                                    value={name}
                                    onChange={(e) => dispatch(setName(e.target.value))}
                                    size="small"
                                    error={valid(name)}
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
                                    value={surname}
                                    error={valid(surname)}
                                    onChange={(e) => dispatch(setSurname(e.target.value))}
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
                                    value={position}
                                    onChange={(e) => dispatch(setPosition(e.target.value))}
                                    size="small"
                                    error={valid(position)}
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
                                <Button variant="outlined" size="small">
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={3} mt={2} color="error">
                                <Button variant="outlined" size="small">
                                    Delete profile
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
