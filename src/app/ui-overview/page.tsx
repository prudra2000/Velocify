import Avatar from "@/components/avatar";
import { Badge } from "@/components/chip";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { IconButton } from "@/components/iconButton";
import { Input } from "@/components/input";
import { Separator } from "@radix-ui/react-select";
import { User } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#030711] p-10 flex flex-col gap-x-10 items-center">
      <div className="flex flex-col items-center text-center gap-y-10 outline outline-1 outline-white/10 w-min p-10 rounded-lg">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-2xl font-bold text-white ">Button Variants</h2>
          <div className="flex flex-row gap-x-5 px-10">
            <Button variant="default">Default</Button>
          </div>
          <div className="flex flex-row gap-x-5 px-10">
            <Button variant="warning">Ghost</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>
            <Button variant="error">Error</Button>
          </div>
          <div className="flex flex-row gap-x-5 px-10">
            <Button variant="link">Link</Button>
          </div>
          <Divider orientation="horizontal" />
          <h2 className="text-2xl font-bold text-white ">Button Variants</h2>
          <div className="flex flex-row gap-x-5 px-10">
            <Button variant="default" disabled={true}>
              Disabled
            </Button>


          </div>
          <div className="flex flex-row gap-x-5 px-10">
            <Button variant="warning" disabled={true}>
              Ghost
            </Button>
            <Button variant="success" disabled={true}>
              Success
            </Button>
            <Button variant="info" disabled={true}>
              Info
            </Button>
            <Button variant="error" disabled={true}>
              Error
            </Button>
          </div>
          <div className="flex flex-row gap-x-5 px-10">
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <h2 className="text-xl font-bold text-white ">Rounded Variants</h2>
          <div className="flex flex-row gap-x-5">
            <Button variant="default" size="default" rounded="none">
              None
            </Button>
            <Button variant="default" size="default" rounded="default">
              Default
            </Button>
            <Button variant="default" size="default" rounded="full">
              Full
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <h2 className="text-xl font-bold text-white ">Size Variants</h2>
          <div className="flex flex-row gap-x-5">
            <Button variant="default" size="small">
              Small
            </Button>
            <Button variant="default" size="default">
              Default
            </Button>
            <Button variant="default" size="large">
              Large
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <h2 className="text-xl font-bold text-white ">Icon Variants</h2>
          <div className="flex flex-row gap-x-5">
            <Button
              variant="default"
              size="default"
              leftIcon={<User className="w-5 h-5" />}
            >
              Left Icon
            </Button>
            <Button
              variant="default"
              size="default"
              rightIcon={<User className="w-5 h-5" />}
            >
              Right Icon
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-xl font-bold text-white ">Avatar Variants</h2>
          <div className="flex flex-row gap-x-5">
            <Button
              variant="default"
              size="large"
              leftAvatar={
                <Avatar className="w-7 h-7" alt={""} src="/avatarImage.png" />
              }
            >
              Left Avatar
            </Button>
            <Button
              variant="default"
              size="large"
              rightAvatar={
                <Avatar className="w-7 h-7" alt={""} src="/avatarImage.png" />
              }
            >
              Right Avatar
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-y-10  outline outline-1 outline-white/10 w-min p-10 rounded-lg">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-2xl font-bold text-white ">Icon Button Variants</h2>
          <div className="flex flex-row gap-x-5 px-10">
            <IconButton variant="default">
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="outline">
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="secondary">
              <User className="w-5 h-5" />
            </IconButton>
          </div>
          <div className="flex flex-row gap-x-5 px-10">
            <IconButton variant="warning">
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="success">
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="info">
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="error">
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="ghost">
              <User className="w-5 h-5" />
            </IconButton>
          </div>
          <h2 className="text-xl font-bold text-white ">Disabled Variants</h2>
          <div className="flex flex-row gap-x-5 px-10">
            <IconButton variant="default" disabled={true}>
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="outline" disabled={true}>
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="secondary" disabled={true}>
              <User className="w-5 h-5" />
            </IconButton>
          </div>
          <div className="flex flex-row gap-x-5 px-10">
            <IconButton variant="warning" disabled={true}>
              <User className="w-5 h-5" />
            </IconButton>
              <IconButton variant="success" disabled={true}>
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="info" disabled={true}>
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="error" disabled={true}>
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="ghost" disabled={true}>
              <User className="w-5 h-5" />
            </IconButton>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <h2 className="text-xl font-bold text-white ">Size Variants</h2>
          <div className="flex flex-row gap-x-5">
          <IconButton variant="default" size="small">
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="default" size="default">
              <User className="w-5 h-5" />
            </IconButton>
            <IconButton variant="default" size="large">
              <User className="w-5 h-5" />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-y-10 bg-[#030711] outline outline-1 outline-white/10 w-min p-10 rounded-lg">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-2xl font-bold text-white ">Badge Variants</h2>
          <h2 className="text-xl font-bold text-white ">Badge Variants</h2>

          <div className="flex flex-row gap-x-5 px-10">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
          </div>
          <div className="flex flex-row gap-x-5 px-10">
            <Badge variant="warning">Warning</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="error">Error</Badge>
          </div>
          <h2 className="text-xl font-bold text-white ">Badge Variants</h2>
          <div className="flex flex-row gap-x-5 px-10">
            <Badge variant="default" disabled={true}>
              Disabled
            </Badge>
            <Badge variant="secondary" disabled={true}>
              Secondary
            </Badge>
          </div>
          <div className="flex flex-row gap-x-5 px-10">
            <Badge variant="warning" disabled={true}>
              Warning
            </Badge>
            <Badge variant="success" disabled={true}>
              Success
            </Badge>
            <Badge variant="info" disabled={true}>
              Info
            </Badge>
            <Badge variant="error" disabled={true}>
              Error
            </Badge>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <h2 className="text-xl font-bold text-white ">Size Variants</h2>
          <div className="flex flex-row gap-x-5">
            <Badge variant="default" size="small">
              Small
            </Badge>
            <Badge variant="default" size="default">
              Default
            </Badge>
            <Badge variant="default" size="large">
              Large
            </Badge>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <h2 className="text-xl font-bold text-white ">Icon Variants</h2>
          <div className="flex flex-row gap-x-5">
            <Badge
              variant="default"
              size="default"
              icon={<User className="w-5 h-5" />}
            >
              Left Icon
            </Badge>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-xl font-bold text-white ">Avatar Variants</h2>
          <div className="flex flex-row gap-x-5">
            <Badge
              variant="default"
              size="default"
              avatar={
                <Avatar className="w-7 h-7" alt={""} src="/avatarImage.png" />
              }
            >
              Left Avatar
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-y-10 bg-[#030711] outline outline-1 outline-white/10 w-min p-10 rounded-lg">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-2xl font-bold text-white ">Input Variants</h2>
          <div className="flex flex-col gap-y-5 px-10">
            <Input variant="default" rounded="default" placeholder="None" />
            <Input variant="outline" rounded="default" placeholder="Default" />
            <Input
              variant="secondary"
              rounded="default"
              placeholder="Secondary"
            />
            <Input
              variant="default"
              rounded="default"
              placeholder="Disabled"
              disabled={true}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <h2 className="text-xl font-bold text-white ">Rounded Variants</h2>
          <div className="flex flex-col gap-y-5">
            <Input variant="default" rounded="none" placeholder="None" />
            <Input variant="default" rounded="default" placeholder="Default" />
            <Input variant="default" rounded="full" placeholder="Full" />
          </div>
        </div>
      </div>
    </main>
  );
}
