import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const UploadButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-orange-400">Upload PDF</Button>
      </DialogTrigger>

      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default UploadButton;
