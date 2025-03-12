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
    password: yup.string().min(6, "Password must be at least 6 characters long.").required("Password is required."),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required.'),
});

export default function ResetPassword() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
        mode: 'onBlur' // Validation will only trigger onBlur
    });

    const onSubmit = (data: any) => {
        console.log("Reset Password Data: ", data);
    };

    return (
        <>
            <Typography component='h6' variant="h6" sx={{ width: "100%", mb: '1rem' }}>
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
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="New Password"
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

                <FormControl>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                variant="outlined"
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword?.message}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormControl>

                <Button type="submit" disabled={!isValid} fullWidth variant="contained">
                    Reset Password
                </Button>
            </Box>
        </>
    );
}
