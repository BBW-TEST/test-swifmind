import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React from 'react';

interface MarkerDialogContentProps {
  title: string;
  description: string;
}

const MarkerDialogContent: React.FC<MarkerDialogContentProps> = ({ title, description }) => (
  <DialogContent className='w-[20%] z-[999]'>
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
  </DialogContent>
);

export default MarkerDialogContent;
