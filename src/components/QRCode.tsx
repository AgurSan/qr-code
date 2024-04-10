import React from 'react';
import QRCodeComponent from 'qrcode.react';

interface QRCodeProps {
value: string;
size?: number;
}

const QRCode: React.FC<QRCodeProps> = ({ value, size = 200}) => {
return (
<div className="flex justify-center mb-6 mt-6">
<QRCodeComponent value={value} size={size} />
</div>
);
};

export default QRCode;
