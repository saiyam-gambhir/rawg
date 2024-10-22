import { BsGlobe } from 'react-icons/bs';
import { FaWindows, FaApple, FaPlaystation, FaXbox, FaLinux, FaAndroid } from 'react-icons/fa';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { MdPhoneIphone } from 'react-icons/md';
import { Platform } from '../hooks/usePlatforms';
import { SiNintendo } from 'react-icons/si';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  };

  return (
    <HStack marginY={2}>
      {platforms?.map((platform) => (
        <Icon
          key={platform.id}
          as={IconMap[platform.slug]}
          color="blue.200"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
