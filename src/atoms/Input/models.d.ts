import React from 'react';

export interface InputProps {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    customClass?: string
}
