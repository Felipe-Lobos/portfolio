import { IoIosCopy } from "react-icons/io";

import { MdOutlineMailOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import { Input, Button, Tooltip } from "@heroui/react";
import { useState } from "react";
export function MailToCopy() {
  const [copied, setCopied] = useState(false);
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const handleCopyButton = async () => {
    try {
      await navigator.clipboard.writeText("felipe.lobosh@gmail.com");
      setCopied(true);
      setTooltipIsOpen(true);
      setTimeout(() => {
        setTooltipIsOpen(false)
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error al copiar ", error);
    }
  };

  return (
    <div className="flex gap-2 items-center ">
      <Input
      size="lg"
        variant="flat"
        className="text-2xl"
        classNames={{input:'text-foreground'}}
        color="secondary"
        isReadOnly
        defaultValue="felipe.lobosh@gmail.com"
        startContent={<MdOutlineMailOutline className="text-primary-400/90 " />}
        type="email"
      />
      <Tooltip content="Copiado" isOpen={tooltipIsOpen}>
        <Button size="lg" isIconOnly onPress={() => handleCopyButton()}>
          {copied ? <FaCheck /> : <IoIosCopy />}
        </Button>
      </Tooltip>
    </div>
  );
}
