import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl } from "@mui/material";

const TextField = styled(MuiTextField)(({ theme }) => ({
    '& .MuiInputBase-root': { 
        backgroundColor: '#21212114'
    }
}));


const schema = yup.object({
    email: yup.string().email("Please enter a valid email address.").required("Email is required."),
    password: yup.string().min(6, "Password must be at least 6 characters long.").required("Password is required."),
});

export default function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onBlur' // This will trigger validation only onBlur
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <Typography component='h1' variant="body1" sx={{ width: "100%", mb: '1rem' }}>
                Reset your password
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
            >
                <FormControl>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email"
                                fullWidth
                                variant="outlined"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormControl>
                <FormControl>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Password"
                                type="password"
                                fullWidth
                                variant="outlined"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormControl>
                <Button type="button" variant='text' sx={{ justifyContent: 'end' }}>
                    Forgot your password?
                </Button>
                <Button type="submit" fullWidth variant="contained">
                    Login
                </Button>
            </Box>
        </>
    );
}
