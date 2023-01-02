import {Avatar, Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import "./UserProfile.scss";
import PersonIcon from "@mui/icons-material/Person";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Navigate, useNavigate} from "react-router-dom";
import {setProfile} from "../../store/reducers/UserSlice";
import axiosConfig from "../../config/axiosConfig";

const UserProfile: React.FC = () => {
        const navigator = useNavigate();
        const {accessToken, user} = useAppSelector((state) => state.userReducer);
        const dispatch = useAppDispatch();

        const [inputs, setInputs] = useState({
            name: "",
            surname: "",
            position: "",
            avatar: "",
        });

        const fetchUser = () => {
            axiosConfig.get('/user').then((res) => {
                dispatch(setProfile(res.data));
                console.log("fetch data success", res.data)
                setInputs((prevState) => ({
                    ...prevState,
                    ...res.data
                }));
            })
        }

        useEffect(() => {
            fetchUser();
        }, [])

        const handleChange = (e: any) => {
            setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        };

        const photoUpload = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                let formData = new FormData();
                formData.append("avatar", e.target.files[0]);
                axiosConfig.post('user/avatar', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(r => {
                    setInputs((prevState) => {
                        let newState = {...prevState};
                        newState.avatar = r.data || "";
                        return newState;
                    });
                })
            }
        };

        const handleSubmit = async (e: any) => {
            e.preventDefault();
            if (valid(inputs.name) || valid(inputs.surname)) {
                return alert("Incorrect input");
            }
            const res = await axiosConfig.patch('/user', Object.fromEntries(Object.entries(inputs).filter(([_, v]) => v != "")));
            alert(res.data);
            fetchUser();
        };

        const deleteProfile = async () => {
            if (!window.confirm("Are you sure you want to delete this profile?")) return;
            const res = await axiosConfig.delete('/user', {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`
                }
            });
            navigator('/login');
            alert(res.data);
        }

        const valid = (text: string) => text.match(/^[a-zA-Z\-]+$/) === null;

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
                                <Avatar alt={user.name} srcSet={user.avatar}/>
                            </Grid>
                            <Grid item xs={3}>
                                <Button size="small" component="label">
                                    UPLOAD PHOTO
                                    <input hidden type="file"
                                           capture
                                           id="avatar" name="avatar"
                                           accept="image/*"
                                           onChange={photoUpload}
                                           multiple/>
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
                                        value={inputs.name}
                                        onChange={handleChange}
                                        size="small"
                                        error={valid(inputs.name)}
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
                                        error={valid(inputs.surname)}
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
                                    <Button variant="outlined" size="small">
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item xs={3} mt={2} color="error">
                                    <Button variant="outlined" size="small" color="error" onClick={deleteProfile}>
                                        Delete profile
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Box>
        );
    }
;

export default UserProfile;
