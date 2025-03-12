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
    otp: yup.string()
        .matches(/^[0-9]{6}$/, "OTP must be a 6-digit number.")
        .required("OTP is required."),
});

export default function OtpVerification() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            otp: ''
        },
        mode: 'onBlur'
    });

    const onSubmit = (data: any) => {
        console.log("OTP Submitted: ", data);
    };

    return (
        <>
            <Typography component='h4' variant="h6" sx={{ width: "100%", mb: '2rem' }}>
                We have sent a verification code to your email{' '}
                <Typography
                    component="a"
                    href="mailto:abc@gmail.com"
                    sx={{ textDecoration: 'none', color: 'primary.main' }}
                >
                    abc@gmail.com
                </Typography>.
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
            >
                <FormControl>
                    <Controller
                        name="otp"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Enter verification code"
                                fullWidth
                                variant="outlined"
                                error={!!errors.otp}
                                helperText={errors.otp?.message}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormControl>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!isValid} 
                >
                    Verify OTP
                </Button>
            </Box>
        </>
    );
}
