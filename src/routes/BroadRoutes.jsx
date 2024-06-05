import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SearchResult from "../Pages/SearchResult";
import Contact from "../Pages/Contact";
import AboutCheck from "../Pages/AboutCheck";
import VideotapeEncodingServices from "../Pages/VideotapeEncodingServices";
import BroadcastStore from "../Pages/BroadcastStore";
import SonyBvu950 from "../Pages/SonyBvu950";
import Locations from "../Pages/Locations";
import Policies from "../Pages/Policies";
import RepairService from "../Pages/RepairService";
import Requestacall from "../Pages/Requestacall";
import Financing from "../Pages/Financing";
import Shipping from "../Pages/Shipping";
import NexioNxAmp from "../Products/NexioNxAmp";
import Enquiry from "../Pages/Enquiry";
import Ikegami from "../Products/Ikegami";
import Jvcdv from "../Products/Jvcdv";
import Jvcav from "../Products/Jvcav";
import Jvcky from "../Products/Jvcky";
import Jvcavp from "../Products/Jvcavp";
import BroadcastStore1InchType from "../Products/Videotape/BroadcastStore1InchType";
import BroadcastStoreBeta from "../Products/Videotape/BroadcastStoreBeta";
import BroadcastStore2InchQuadruplex from "../Products/Videotape/BroadcastStore2InchQuadruplex";
import BroadcastStoreMatictape from "../Products/Videotape/BroadcastStoreMatictape";
import Broadcaststore16mm from "../Products/Alteran/Broadcaststore16mm";
import Canon from "../Pages/Canon";
import CanonXL1S from "../Products/Canon/CanonXL1S";
import CanonXL2 from "../Products/Canon/CanonXL2";
import CanonDVM from "../Products/Canon/CanonDVM";
import CanonDIGI from "../Products/Canon/CanonDIGI";
import WiFi from "../Products/WiFi";
import Chromecast from "../Products/Chromecast";
import Ipadpro from "../Products/Ipadpro";
import A4Techheadset from "../Products/A4Techheadset";
import SpeakerAlesis from "../Products/SpeakerAlesis";
import Applemonitor from "../Products/Applemonitor";
import Computers from "../Pages/Computers";
import Cameras from "../Pages/Cameras";

import AmxAxdCa10 from "../Products/AmxAxdCa10";
import AmxAxdCa10pb from "../Products/AmxAxdCa10pb";
import AmxAxtCa10 from "../Products/AmxAxtCa10";

import Lights from "../Products/Lights/Lights";
import Camcorders from "../Products/Camcorders/Camcorders";
import Audio from "../Products/Audio/Audio";
import Mpft from "../Products/Motion/Mpft";
import Transmitter from "../Products/Transmitter/Transmitter";
import Lenses from "../Products/Lenses/Lenses";
import Thankyou from "../Pages/Thankyou";
import Test from "../Pages/Test";
import LipsnerSmith from "../Products/LipsnerSmith";
import D29wstlx from "../Products/D29wstlx";
import D29wuch from "../Products/Videotape/D29wuch";
import F1030U from "../Products/Videotape/F103ou";
import KYf32u from "../Products/Videotape/KYf32u";
import Betacamsx from "../Products/Videotape/Betacamsx";
import D2videotape from "../Products/Videotape/D2videotape";
import Videotapetransfer from "../Products/Videotape/Videotapetransfer";
import Betacamptape from "../Products/Videotape/Betacamptape";
import Canonfc from "../Products/Canon/Canonfc";
import Canonp2 from "../Products/Canon/Canonp2";
import Canonp3 from "../Products/Canon/Canonp3";
import Canonp4 from "../Products/Canon/Canonp4";
import Canonp5 from "../Products/Canon/Canonp5";
import Canonp6 from "../Products/Canon/Canonp6";
import Umatics from "../Products/Umatics/TopUmatics";
import SonyVO5800 from "../Products/Umatics/SonyVO5800";
import SonyVP7020 from "../Products/Umatics/SonyVP7020";
import DigitalBetacam from "../Products/DigitalBetacam/DigitalBetacam";
import D3 from "../Products/D3/D3";
import Inch1 from "../Products/1inch/Inch1";
import Sonydvw from "../Products/DigitalBetacam/Sonydvw";
import Sonydvwa from "../Products/DigitalBetacam/Sonydvwa";
import Panasonic from "../Products/D3/Panasonic";
import Sonybvh2000 from "../Products/1inch/Sonybvh2000";
import Sonybvh3000 from "../Products/1inch/Sonybvh3000";
import Quadbroadcast from "../Products/D3/Quadbroadcast";
import GrassValleyLDK600 from "../Pages/GrassValleyLDK600";
import ColorMonitors from "../Products/ColorMonitors/ColorMonitors";
import SonyBVMD32E1WU from "../Products/ColorMonitors/SonyBVMD32E1WU";
import SonyFLEXICARTBFC from "../Products/TapePlayback/SonyFLEXICARTBFC";
import TapePlayback from "../Products/TapePlayback/TopTapePlayback";
import Tapeleaners from "../Products/TapeCleaners/TopTapeleaners";
import RTIVT3100 from "../Products/TapeCleaners/RTIVT3100";
import RTI4100 from "../Products/TapeCleaners/RTI4100";
import Switchers from "../Products/Switchers/Switchers";
import Blackmagic from "../Products/Switchers/Blackmagic";
import GrassValleyKALYPSO from "../Pages/GrassValleyKALYPSO";
import SonyVO5850 from "../Products/Umatics/SonyVO5850";
import SonyVP9000 from "../Products/Umatics/SonyVP9000";
import SonyVP7000 from "../Products/Umatics/SonyVP7000";
import SONYBVU800 from "../Products/Umatics/SONYBVU800";
import SONYVO9850 from "../Products/Umatics/SONYVO9850";
import SonyVP5020 from "../Products/Umatics/SonyVP5020";
import SONYVO9800 from "../Products/Umatics/SONYVO9800";
import SonyDVWA500 from "../Products/DigitalBetacam/SonyDVWA500";
import Mii from "../Products/MII/Mii";
import PanasonicAU65 from "../Products/MII/PanasonicAU65";
import PanasonicAU650 from "../Products/MII/PanasonicAU650";
import PanasonicAUW35HP from "../Products/MII/PanasonicAUW35HP";
import NewTekTriCaster from "../Products/Switchers/NewTekTriCaster";
import RTIProLine from "../Products/TapeCleaners/RTIProLine";
import BlackmagicDesignURSA from "../Pages/BlackmagicDesignURSA";
import PanasonicAGHPX600 from "../Pages/PanasonicAGHPX600";
import D2 from "../Products/D2/D2";
import HDCAMEDITING from "../Products/HDCAMEDITING/HDCAMEDITING";
import Done from "../Products/D1/Done";
import Clearcom from "../Products/Audio/Clearcom";
import Midas from "../Products/Audio/Midas";
import Fujinon1 from "../Products/Lenses/Fujinon1";
import Fujinon2 from "../Products/Lenses/Fujinon2";
import Hdcamsr from "../Products/Hdcamsr/Hdcamsr";
import SonySRW5500 from "../Products/Hdcamsr/SonySRW5500";
import HDCAMEditingRecorder from "../Products/HDCAMEditingRecorder/TopHDCAMEditingRecorder";
import SonyHDW1800 from "../Products/HDCAMEditingRecorder/SonyHDW1800";
import SonyBVMD20F1U from "../Products/ColorMonitors/SonyBVMD20F1U";
import TrackRecorder from "../Products/TrackRecorder/TrackRecorder";
import AMPEXATR124 from "../Products/TrackRecorder/AMPEXATR124";
import DVCPRO from "../Products/DVCPRO/TopDVCPRO";
import AJHD1400 from "../Products/DVCPRO/AJHD1400";
import AJHD1700 from "../Products/DVCPRO/AJHD1700";
import SonyDVR10 from "../Products/D2/SonyDVR10";
import SONYDVR2000 from "../Products/D1/SONYDVR2000";

import SonyVP7040 from "../Products/Umatics/SonyVP7040";
import SonyBVU850 from "../Products/Umatics/SonyBVU850";
import SonyBVU900 from "../Products/Umatics/SonyBVU900";
import SonyBVU950P from "../Products/Umatics/SonyBVU950P";
import SonyVO9600P from "../Products/Umatics/SonyVO9600P";
import SonyVO9850P from "../Products/Umatics/SonyVO9850P";
import SonyVO9800 from "../Products/Umatics/SONYVO9800";
import SonyVO7630 from "../Products/Umatics/SonyVO7630";

import SonyUVW18000 from "../Products/DigitalBetacam/SonyUVW18000";
import SonyBVW75 from "../Products/DigitalBetacam/SonyBVW75";
import SonyBVW70 from "../Products/DigitalBetacam/SonyBVW70";
import SonyPVW2800 from "../Products/DigitalBetacam/SonyPVW2800";
import SonyUVW1200 from "../Products/DigitalBetacam/SonyUVW1200";
import SonyUVW1400 from "../Products/DigitalBetacam/SonyUVW1400";
import SonyUVW1800 from "../Products/DigitalBetacam/SonyUVW1800";

import PanasonicAVUHS500 from "../Products/Switchers/PanasonicAVUHS500";
import ForAHVS390HS from "../Products/Switchers/ForAHVS390HS";
import SonyHDWM200020 from "../Products/Hdcamsr/SonyHDWM200020";
import SonyPDWF800 from "../Products/Camcorders/SonyPDWF800";
import SonyPXWFS5MKII from "../Products/Camcorders/SonyPXWFS5MKII";
import Digitalbetacamcamcorder from "../Products/DigitalBetacamCamcorder/Digitalbetacamcamcorder";
import DVW709WSP from "../Products/DigitalBetacamCamcorder/DVW709WSP";
import CinemaEOSCamcorder from "../Products/DigitalBetacamCamcorder/CinemaEOSCamcorder";
import CANONEOSC300 from "../Products/DigitalBetacamCamcorder/CANONEOSC300";
import IHDStudioCameras from "../Products/1080iHDStudioCameras/IHDStudioCameras";
import HitachiZHD6000 from "../Products/1080iHDStudioCameras/HitachiZHD6000";
import HitachiZHD5000 from "../Products/1080iHDStudioCameras/HitachiZHD5000";
import LargeScaleMediaMigration from "../Pages/LargeScaleMediaMigration";
import P2HDRHDCamcorder from "../Products/P2HDRHDCamcorder/P2HDRHDCamcorder";
import PanasonicAJHPX3000 from "../Products/P2HDRHDCamcorder/PanasonicAJHPX3000";
import PanasonicAJPX5100 from "../Products/P2HDRHDCamcorder/PanasonicAJPX5100";
import HDCAMCamcorders from "../Products/HDCAMCamcorders/HDCAMCamcorders";
import SonyHDWF900R from "../Products/HDCAMCamcorders/SonyHDWF900R";
import FujinonZK1990mm from "../Products/Lenses/FujinonZK1990mm";
import FujinonZK85300mm from "../Products/Lenses/FujinonZK85300mm";
import SONYPCM7040 from "../Products/Audio/SONYPCM7040";
import LexiconPCM90 from "../Products/Audio/LexiconPCM90";

import SonyPCMR700 from "../Products/Audio/SonyPCMR700";
import UREI1176 from "../Products/Audio/UREI1176";
import Bryston3B from "../Products/Audio/Bryston3B";
import SoundcraftDeltaDLXAudioMixer from "../Products/Audio/SoundcraftDeltaDLXAudioMixer";
import RevoxA77OpenReel from "../Products/Audio/RevoxA77OpenReel";
import SonyTCOpenReelTrack from "../Products/Audio/SonyTCOpenReelTrack";
import TEACA2300SDOpenReel from "../Products/Audio/TEACA2300SDOpenReel";
import AmpexAG440 from "../Products/Audio/AmpexAG440";
import RanePEAudioFilterSets from "../Products/Audio/RanePEAudioFilterSets";
import LynxHiloConverterSystems from "../Products/Audio/LynxHiloConverterSystems";
import TEACANDolbyNoiseReductionUnit from "../Products/Audio/TEACANDolbyNoiseReductionUnit";
import DenonDNMultiSourceCDPlayer from "../Products/Audio/DenonDNMultiSourceCDPlayer";
import TannoyLittleGoldMonitor from "../Products/Audio/TannoyLittleGoldMonitor";
import UniversalAudioLNLimiter from "../Products/Audio/UniversalAudioLNLimiter";
import Bryston3BAmplifier from "../Products/Audio/Bryston3BAmplifier";
import FurmanARPROACLineRegulatorA from "../Products/Audio/FurmanARPROACLineRegulatorA";
import FurmanARPROACLineRegulatorB from "../Products/Audio/FurmanARPROACLineRegulatorB";

import Dvcam from "../Products/DVCAM/Dvcam";
import Hi8 from "../Products/Hi8/Hi8";
import Svhs from "../Products/SVHS/TopSvhs";
import SonyDSR2000 from "../Products/DVCAM/SonyDSR2000";
import JVCBRS822DXU from "../Products/SVHS/JVCBRS822DXU";
import MitsubishiHSU776 from "../Products/SVHS/MitsubishiHSU776";
import SonyEVO9800 from "../Products/Hi8/SonyEVO9800";
import Sony0DVWM2000 from "../Products/DigitalBetacam/Sony0DVWM2000";
import SuperBetamax from "../Products/SuperBetamax/TopSuperBetamax";
import SonySLHF860D from "../Products/SuperBetamax/SonySLHF860D";
import SonyGVD200 from "../Products/DigitalHi8deck/SonyGVD200";
import DigitalHi8deck from "../Products/DigitalHi8deck/TopDigitalHi8deck";
import TVLogic from "../Products/ColorMonitors/TVLogic";
import MonitorwithSDI from "../Products/MonitorwithSDI/TopMonitorwithSDI";
import IkegamiTM2080R from "../Products/MonitorwithSDI/IkegamiTM2080R";
import Tbc from "../Products/TBC/TopTbc";
import FrameSynchronizerConverter from "../Products/FrameSynchronizerConverter/TopFrameSynchronizerConverter";
import NTSCSignalGenerator from "../Products/NTSCSignalGenerator/TopNTSCSignalGenerator";
import Vectorscope from "../Products/Vectorscope/TopVectorscope";
import WaveformMonitors from "../Products/WaveformMonitors/WaveformMonitors";
import EncoderDecoder from "../Products/EncoderDecoder/EncoderDecoder";
import ProfessionalVideoIOwithTB3 from "../Products/ProfessionalVideoIOwithTB3/ProfessionalVideoIOwithTB3";
import DPS295 from "../Products/TBC/DPS295";
import AJAFS1 from "../Products/FrameSynchronizerConverter/AJAFS1";
import AJAFS2 from "../Products/FrameSynchronizerConverter/AJAFS2";
import AJAIo4KPlus from "../Products/ProfessionalVideoIOwithTB3/AJAIo4KPlus";
import TektronixTSG170A from "../Products/NTSCSignalGenerator/TektronixTSG170A";
import Tektronix1720 from "../Products/Vectorscope/Tektronix1720";
import Tektronix1730 from "../Products/WaveformMonitors/Tektronix1730";
import DBX150X from "../Products/EncoderDecoder/DBX150X";
import DolbyModel363SRA from "../Products/EncoderDecoder/DolbyModel363SRA";
import Tripodlenses from "../Products/Tripodlenses/Tripodlenses";
import AntonBauer3013 from "../Products/Tripodlenses/AntonBauer3013";
import AntonBauerDigitalProPac14Logic from "../Products/Tripodlenses/AntonBauerDigitalProPac14Logic";
import AntonBauerHYTRON100 from "../Products/Tripodlenses/AntonBauerHYTRON100";
import AntonBauerHYTRON140 from "../Products/Tripodlenses/AntonBauerHYTRON140";
import AntonBauerPOWERSTRAP13 from "../Products/Tripodlenses/AntonBauerPOWERSTRAP13";
import AntonBauerPROPAC14Logic from "../Products/Tripodlenses/AntonBauerPROPAC14Logic";
import AntonBauerQUAD2702InterActive2000 from "../Products/Tripodlenses/AntonBauerQUAD2702InterActive2000";
import AntonBauerUltraDAYlight from "../Products/Tripodlenses/AntonBauerUltraDAYlight";
import ASPENJVCKIT2 from "../Products/Tripodlenses/ASPENJVCKIT2";
import Inchquad from "../Products/INCHQUAD/Inchquad";
import DAs from "../Products/DAs/DAs";
import Tripods from "../Products/Tripods/Tripods";
import Tripodheads from "../Products/Tripodheads/Tripodheads";
import ViewFinders from "../Products/ViewFinders/ViewFinders";
import CCDCameras from "../Products/CCDCameras/CCDCameras";
import DVCAMMNIDV from "../Products/DVCAMMNIDV/DVCAMMNIDV";
import XDCAM from "../Products/XDCAM/XDCAM";
import BETACAMSP from "../Products/BETACAMSP/BETACAMSP";
import BetaDecks from "../Products/BetaDecks/BetaDecks";
import SonySRW58002 from "../Products/Hdcamsr/SonySRW58002";
import SonySLO1800Betamax from "../Products/BETACAMSP/SonySLO1800Betamax";
import AMPEXAVR2 from "../Products/INCHQUAD/AMPEXAVR2";
import GrassValley85508551 from "../Products/DAs/GrassValley85508551";

import SonyTrinitronPVM2530 from "../Products/MonitorwithSDI/SonyTrinitronPVM2530";
import SonyPVM2030 from "../Products/MonitorwithSDI/SonyPVM2030";
import SonyPVM14L2 from "../Products/MonitorwithSDI/SonyPVM14L2";
import SonyPVM14M4U from "../Products/MonitorwithSDI/SonyPVM14M4U";
import PanasonicBT4LH from "../Products/MonitorwithSDI/PanasonicBT4LH";
import SonyTrinitronBVM20F1U from "../Products/MonitorwithSDI/SonyTrinitronBVM20F1U";
import VintenOspreyElitePedestalwVector75Head from "../Products/Tripods/VintenOspreyElitePedestalwVector75Head";
import Vinten3702FulmarCameraTripodStudioPedestal from "../Products/Tripods/Vinten3702FulmarCameraTripodStudioPedestal";
import SachtlerVideo20 from "../Products/Tripods/SachtlerVideo20";
import VintenVector70 from "../Products/Tripodheads/VintenVector70";
import VintenVector90 from "../Products/Tripodheads/VintenVector90";
import SonyDXC960MD from "../Products/CCDCameras/SonyDXC960MD";
import PanasonicAJHVF21G from "../Products/ViewFinders/PanasonicAJHVF21G";

import PanasonicAGHMC80 from "../Products/Cameras/PanasonicAGHMC80";
import SonyPXWZ150 from "../Products/Cameras/SonyPXWZ150";
import SonyPMWEX1 from "../Products/Cameras/SonyPMWEX1";
import SonyPMWEX3 from "../Products/Cameras/SonyPMWEX3";
import SonyPMW200 from "../Products/Cameras/SonyPMW200";
import ArriAlexaclassiccamera from "../Products/Cameras/ArriAlexaclassiccamera";
import SonyHXC100 from "../Products/Cameras/SonyHXC100";
import SonyPMW300K1 from "../Products/Cameras/SonyPMW300K1";
import FujinonHA26x67BESME18 from "../Products/Lenses/FujinonHA26x67BESME18";
import FujinonUA107x84BESMT454K from "../Products/Lenses/FujinonUA107x84BESMT454K";
import CanonHJ4010BIASDV from "../Products/Lenses/CanonHJ4010BIASDV";
import RTI6120 from "../Products/TapeCleaners/RTI6120";
import SonyBVU820 from "../Products/Umatics/SonyBVU820";
import SonyVO9850TC from "../Products/Umatics/SonyVO9850TC";
import SonyUVW1400PPal from "../Products/BETACAMSP/SonyUVW1400PPal";
import SonyDVWM2000PPal from "../Products/BETACAMSP/SonyDVWM2000PPal";
import SonyJ3 from "../Products/BetaDecks/SonyJ3";
import SonyJ30SDI from "../Products/BetaDecks/SonyJ30SDI";
import PanasonicAJD960 from "../Products/DVCPRO/PanasonicAJD960";
import SONYHDWF500 from "../Products/Hdcamsr/SONYHDWF500";
import SonyHDWM2100 from "../Products/Hdcamsr/SonyHDWM2100";
import SonyHDWD2000 from "../Products/Hdcamsr/SonyHDWD2000";
import SonyJH3 from "../Products/Hdcamsr/SonyJH3";
import SonyPDWHD1500 from "../Products/XDCAM/SonyPDWHD1500";
import SonyDSR25 from "../Products/DVCAMMNIDV/SonyDSR25";
import SonyDSR45 from "../Products/DVCAMMNIDV/SonyDSR45";
import WheatstoneD32 from "../Products/Audio/WheatstoneD32";
import SSLC10040 from "../Products/Audio/SSLC10040";
import LeitchX50AV2PS from "../Products/FrameSynchronizerConverter/LeitchX50AV2PS";
import NVisionEnvoy from "../Products/Switchers/NVisionEnvoy";
import HVS500HS from "../Products/Switchers/HVS500HS";

import PanasonicAGW3P from "../Products/SVHS/PanasonicAGW3P";
import PanasonicAGW1PMultisystemVHS from "../Products/SVHS/PanasonicAGW1PMultisystemVHS";
import PanasonicAG1980 from "../Products/SVHS/PanasonicAG1980";
import PanasonicAG7750 from "../Products/SVHS/PanasonicAG7750";
import PanasonicAG7500 from "../Products/SVHS/PanasonicAG7500";
import JVCBRS525DXU from "../Products/SVHS/JVCBRS525DXU";

import SonyBVH2000PSPal from "../Products/1inch/SonyBVH2000PSPal";
import SonyBVH3100PPal from "../Products/1inch/SonyBVH3100PPal";
import SonyBVH3100 from "../Products/1inch/SonyBVH3100";
import ID1DigitalInstrumentation from "../Products/ID1DigitalInstrumentation/ID1DigitalInstrumentation";
import SonyDIR1000M from "../Products/ID1DigitalInstrumentation/SonyDIR1000M";
import TektronixWFM5000 from "../Products/WaveformMonitors/TektronixWFM5000";
import SonyPVM20M2MDU from "../Products/MonitorwithSDI/SonyPVM20M2MDU";
import SonyPVM1954Q from "../Products/MonitorwithSDI/SonyPVM1954Q";
import SonyBVM20F1U from "../Products/MonitorwithSDI/SonyBVM20F1U";
import Remotecontrolpanel from "../Products/Remotecontrolpanel/Remotecontrolpanel";
import SonRCP750 from "../Products/Remotecontrolpanel/SonRCP750";
import FujinonHA42BERDU48 from "../Products/Lenses/FujinonHA42BERDU48";
import CanonCN717KAS from "../Products/Lenses/CanonCN717KAS";
import CanonHJ11ex47BIASE from "../Products/Lenses/CanonHJ11ex47BIASE";
import FujinonUA4695BERDU1 from "../Products/Lenses/FujinonUA4695BERDU1";
import SonyVP8000 from "../Products/Umatics/SonyVP8000";
import SonyBVU920 from "../Products/Umatics/SonyBVU920";

import SonyBVWD75 from "../Products/BETACAMSP/SonyBVWD75";
import SonyBVW60 from "../Products/BETACAMSP/SonyBVW60";
import SonyPVW2600 from "../Products/BETACAMSP/SonyPVW2600";
import SonyPVW2650 from "../Products/BETACAMSP/SonyPVW2650";
import SonyBVW75PPal from "../Products/BETACAMSP/SonyBVW75PPal";

import SonyDSR11 from "../Products/DVCAMMNIDV/SonyDSR11";
import SonyDSR1600 from "../Products/DVCAMMNIDV/SonyDSR1600";
import SonyDSR80 from "../Products/DVCAMMNIDV/SonyDSR80";
import SonyDSR1800 from "../Products/DVCAMMNIDV/SonyDSR1800";
import SonyDSR1500A from "../Products/DVCAMMNIDV/SonyDSR1500A";
import SonyDSR30 from "../Products/DVCAMMNIDV/SonyDSR30";
import SonyDSR20 from "../Products/DVCAMMNIDV/SonyDSR20";
import SonyXDCAMPMW500 from "../Products/XDCAM/SonyXDCAMPMW500";
import Film from "../Products/Film/Film";
import MWAFlashscanFilmscanner from "../Products/Film/MWAFlashscanFilmscanner";
import MWAMB5116mmsoundfollower from "../Products/Film/MWAMB5116mmsoundfollower";
import AMPEXAVR3 from "../Products/INCHQUAD/AMPEXAVR3";
import BoshBCN52 from "../Products/1inch/BoshBCN52";
import BoshBCN51 from "../Products/1inch/BoshBCN51";
import SnellWilcoxCVR45DTVStandardsconverter from "../Products/FrameSynchronizerConverter/SnellWilcoxCVR45DTVStandardsconverter";
import RTITC5100DVtapecleaner from "../Products/TapeCleaners/RTITC5100DVtapecleaner";
import RTI460VHSCleaner from "../Products/TapeCleaners/RTI460VHSCleaner";
import FluidHead from "../Products/FluidHead/FluidHead";
import Oconnor2575D from "../Products/FluidHead/Oconnor2575D";
import SonPXW400Shouldercamcorder from "../Products/Cameras/SonPXW400Shouldercamcorder";
import SonyPXW4504kUHDShouldercamcorder from "../Products/Cameras/SonyPXW4504kUHDShouldercamcorder";
import BlackmagicDesignATEMTelevisionStudioHD8 from "../Products/Switchers/BlackmagicDesignATEMTelevisionStudioHD8";
import PanasonicAVHSW10CompactSwitcher from "../Products/Switchers/PanasonicAVHSW10CompactSwitcher";
import VaddioAVBridgeLectureCaptureDevice from "../Products/Switchers/VaddioAVBridgeLectureCaptureDevice";
import BlackmagicDesignATEMMEBroadcastStudio4K from "../Products/Switchers/BlackmagicDesignATEMMEBroadcastStudio4K";
import Digibeta from "../Products/Digibeta/Digibeta";
import SonyDVW599 from "../Products/Digibeta/SonyDVW599";
import SonyDVW510 from "../Products/Digibeta/SonyDVW510";
import SonyDVWM2000 from "../Products/Digibeta/SonyDVWM2000";
import SonyHDW2000 from "../Products/Hdcamsr/SonyHDW2000";
import Betamax from "../Products/Betamax/Betamax";
import SonySLT150ME from "../Products/Betamax/SonySLT150ME";
import SonySlHF1000 from "../Products/Betamax/SonySlHF1000";
import SonyDVR18 from "../Products/D2/SonyDVR18";
import D5 from "../Products/D5/D5";
import PanasonicAJD580 from "../Products/D5/PanasonicAJD580";
import PanasonicAJHD3700B from "../Products/D5/PanasonicAJHD3700B";
import SonyBVT800 from "../Products/TBC/SonyBVT800";
import SonyBVT810 from "../Products/TBC/SonyBVT810";
import MWAFlashscan8 from "../Products/Film/MWAFlashscan8";
import RTITapecheck460VHS from "../Products/TapeCleaners/RTITapecheck460VHS";
import SonyPCM7030 from "../Products/Audio/SonyPCM7030";
import TektronixWFM8200 from "../Products/WaveformMonitors/TektronixWFM8200";
import TektronixWFM8300 from "../Products/WaveformMonitors/TektronixWFM8300";
import CamerasXDCAM from "../Products/CamerasXDCAM/CamerasXDCAM";
import KXDCAM from "../Products/4KXDCAM/4KXDCAM";
import SonyPXWFS7M2 from "../Products/4KXDCAM/SonyPXWFS7M2";
import KHDRCAMCORDER from "../Products/KHDRCAMCORDER/KHDRCAMCORDER";
import SonyPXWZ450 from "../Products/KHDRCAMCORDER/SonyPXWZ450";
import SonyRCP1500 from "../Products/Remotecontrolpanel/SonyRCP1500";
import Pedestal from "../Products/Pedestal/Pedestal";
import VintenOspreyElite from "../Products/Pedestal/VintenOspreyElite";
import Vinten3702FULMAR from "../Products/Pedestal/Vinten3702FULMAR";
import GrassValleyLDX80 from "../Products/Cameras/GrassValleyLDX80";

import Monitors from "../Products/Monitors/Monitors";
import SONYBVMA20F1M from "../Products/Monitors/SONYBVMA20F1M";
import SonyBVM1310 from "../Products/Monitors/SonyBVM1310";
import SonyBVML230 from "../Products/Monitors/SonyBVML230";
import SonyBVMF250 from "../Products/Monitors/SonyBVMF250";
import SonyBVM14F5U from "../Products/Monitors/SonyBVM14F5U";
import PanasonicBTLH1710 from "../Products/Monitors/PanasonicBTLH1710";
import PanasonicBTLH910G from "../Products/Monitors/PanasonicBTLH910G";
import SonyPVM1354Q from "../Products/Monitors/SonyPVM1354Q";
import SonyPVM20M4U from "../Products/Monitors/SonyPVM20M4U";
import SonyPVM8020 from "../Products/Monitors/SonyPVM8020";
import SONYPVM2530 from "../Products/Monitors/SONYPVM2530";

const BroadRoutes = () => {
	return (
		<Routes>
			<Route
				path="/search"
				element={<SearchResult />}
			/>
			{/* Add other routes here */}

			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/Contact"
				element={<Contact />}
			/>
			<Route
				path="/Digibeta"
				element={<Digibeta />}
			/>
			<Route
				path="/SonyDVW599"
				element={<SonyDVW599 />}
			/>
			<Route
				path="/SonyDVW510"
				element={<SonyDVW510 />}
			/>
			<Route
				path="/SonyDVWM2000"
				element={<SonyDVWM2000 />}
			/>
			<Route
				path="/SonyHDW2000"
				element={<SonyHDW2000 />}
			/>
			<Route
				path="/Pedestal"
				element={<Pedestal />}
			/>
			<Route
				path="/VintenOspreyElite"
				element={<VintenOspreyElite />}
			/>
			<Route
				path="/Vinten3702FULMAR"
				element={<Vinten3702FULMAR />}
			/>
			<Route
				path="/GrassValleyLDX80"
				element={<GrassValleyLDX80 />}
			/>
			<Route
				path="/AboutCheck"
				element={<AboutCheck />}
			/>

			<Route
				path="/Monitors"
				element={<Monitors />}
			/>
			<Route
				path="/SONYBVMA20F1M"
				element={<SONYBVMA20F1M />}
			/>
			<Route
				path="/SonyBVM1310"
				element={<SonyBVM1310 />}
			/>
			<Route
				path="/SonyBVML230"
				element={<SonyBVML230 />}
			/>
			<Route
				path="/SonyBVMF250"
				element={<SonyBVMF250 />}
			/>
			<Route
				path="/SonyBVM14F5U"
				element={<SonyBVM14F5U />}
			/>
			<Route
				path="/PanasonicBTLH1710"
				element={<PanasonicBTLH1710 />}
			/>
			<Route
				path="/PanasonicBTLH910G"
				element={<PanasonicBTLH910G />}
			/>
			<Route
				path="/SonyPVM1354Q"
				element={<SonyPVM1354Q />}
			/>
			<Route
				path="/SonyPVM20M4U"
				element={<SonyPVM20M4U />}
			/>
			<Route
				path="/SonyPVM8020"
				element={<SonyPVM8020 />}
			/>
			<Route
				path="/SONYPVM2530"
				element={<SONYPVM2530 />}
			/>

			<Route
				path="/Betamax"
				element={<Betamax />}
			/>
			<Route
				path="/SonySLT150ME"
				element={<SonySLT150ME />}
			/>
			<Route
				path="/SonySlHF1000"
				element={<SonySlHF1000 />}
			/>
			<Route
				path="/SonyDVR18"
				element={<SonyDVR18 />}
			/>
			<Route
				path="/PanasonicAJD580"
				element={<PanasonicAJD580 />}
			/>
			<Route
				path="/PanasonicAJHD3700B"
				element={<PanasonicAJHD3700B />}
			/>
			<Route
				path="/D5"
				element={<D5 />}
			/>
			<Route
				path="/TektronixWFM8200"
				element={<TektronixWFM8200 />}
			/>
			<Route
				path="/TektronixWFM8300"
				element={<TektronixWFM8300 />}
			/>
			<Route
				path="/KXDCAM"
				element={<KXDCAM />}
			/>
			<Route
				path="/SonyPXWFS7M2"
				element={<SonyPXWFS7M2 />}
			/>
			<Route
				path="/KHDRCAMCORDER"
				element={<KHDRCAMCORDER />}
			/>
			<Route
				path="/SonyPXWZ450"
				element={<SonyPXWZ450 />}
			/>
			<Route
				path="/SonyRCP1500"
				element={<SonyRCP1500 />}
			/>

			<Route
				path="/SonyBVT800"
				element={<SonyBVT800 />}
			/>
			<Route
				path="/SonyBVT810"
				element={<SonyBVT810 />}
			/>
			<Route
				path="/MWAFlashscan8"
				element={<MWAFlashscan8 />}
			/>
			<Route
				path="/RTITapecheck460VHS"
				element={<RTITapecheck460VHS />}
			/>
			<Route
				path="/SonyPCM7030"
				element={<SonyPCM7030 />}
			/>
			<Route
				path="/CamerasXDCAM"
				element={<CamerasXDCAM />}
			/>

			<Route
				path="/SnellWilcoxCVR45DTVStandardsconverter"
				element={<SnellWilcoxCVR45DTVStandardsconverter />}
			/>
			<Route
				path="/RTITC5100DVtapecleaner"
				element={<RTITC5100DVtapecleaner />}
			/>
			<Route
				path="/RTI460VHSCleaner"
				element={<RTI460VHSCleaner />}
			/>
			<Route
				path="/FluidHead"
				element={<FluidHead />}
			/>
			<Route
				path="/Oconnor2575D"
				element={<Oconnor2575D />}
			/>
			<Route
				path="/SonPXW400Shouldercamcorder"
				element={<SonPXW400Shouldercamcorder />}
			/>
			<Route
				path="/SonyPXW4504kUHDShouldercamcorder"
				element={<SonyPXW4504kUHDShouldercamcorder />}
			/>
			<Route
				path="/BlackmagicDesignATEMTelevisionStudioHD8"
				element={<BlackmagicDesignATEMTelevisionStudioHD8 />}
			/>
			<Route
				path="/PanasonicAVHSW10CompactSwitcher"
				element={<PanasonicAVHSW10CompactSwitcher />}
			/>
			<Route
				path="/VaddioAVBridgeLectureCaptureDevice"
				element={<VaddioAVBridgeLectureCaptureDevice />}
			/>
			<Route
				path="/BlackmagicDesignATEMMEBroadcastStudio4K"
				element={<BlackmagicDesignATEMMEBroadcastStudio4K />}
			/>

			<Route
				path="/SonyDSR11"
				element={<SonyDSR11 />}
			/>
			<Route
				path="/SonyDSR1600"
				element={<SonyDSR1600 />}
			/>
			<Route
				path="/SonyDSR80"
				element={<SonyDSR80 />}
			/>
			<Route
				path="/SonyDSR1800"
				element={<SonyDSR1800 />}
			/>
			<Route
				path="/SonyDSR1500A"
				element={<SonyDSR1500A />}
			/>
			<Route
				path="/SonyDSR30"
				element={<SonyDSR30 />}
			/>
			<Route
				path="/SonyDSR20"
				element={<SonyDSR20 />}
			/>
			<Route
				path="/Film"
				element={<Film />}
			/>
			<Route
				path="/MWAFlashscanFilmscanner"
				element={<MWAFlashscanFilmscanner />}
			/>
			<Route
				path="/MWAMB5116mmsoundfollower"
				element={<MWAMB5116mmsoundfollower />}
			/>
			<Route
				path="/AMPEXAVR3"
				element={<AMPEXAVR3 />}
			/>
			<Route
				path="/SonyXDCAMPMW500"
				element={<SonyXDCAMPMW500 />}
			/>
			<Route
				path="/BoshBCN52"
				element={<BoshBCN52 />}
			/>
			<Route
				path="/BoshBCN51"
				element={<BoshBCN51 />}
			/>

			<Route
				path="/SonyBVH2000PSPal"
				element={<SonyBVH2000PSPal />}
			/>
			<Route
				path="/SonyBVH3100PPal"
				element={<SonyBVH3100PPal />}
			/>
			<Route
				path="/SonyBVH3100"
				element={<SonyBVH3100 />}
			/>
			<Route
				path="/ID1DigitalInstrumentation"
				element={<ID1DigitalInstrumentation />}
			/>
			<Route
				path="/SonyDIR1000M"
				element={<SonyDIR1000M />}
			/>
			<Route
				path="/TektronixWFM5000"
				element={<TektronixWFM5000 />}
			/>
			<Route
				path="/SonyPVM20M2MDU"
				element={<SonyPVM20M2MDU />}
			/>
			<Route
				path="/SonyPVM1954Q"
				element={<SonyPVM1954Q />}
			/>
			<Route
				path="/SonyBVM20F1U"
				element={<SonyBVM20F1U />}
			/>
			<Route
				path="/Remotecontrolpanel"
				element={<Remotecontrolpanel />}
			/>
			<Route
				path="/SonRCP750"
				element={<SonRCP750 />}
			/>
			<Route
				path="/FujinonHA42BERDU48"
				element={<FujinonHA42BERDU48 />}
			/>
			<Route
				path="/CanonCN717KAS"
				element={<CanonCN717KAS />}
			/>
			<Route
				path="/CanonHJ11ex47BIASE"
				element={<CanonHJ11ex47BIASE />}
			/>
			<Route
				path="/FujinonUA4695BERDU1"
				element={<FujinonUA4695BERDU1 />}
			/>
			<Route
				path="/SonyVP8000"
				element={<SonyVP8000 />}
			/>
			<Route
				path="/SonyBVU920"
				element={<SonyBVU920 />}
			/>

			<Route
				path="/SonyBVWD75"
				element={<SonyBVWD75 />}
			/>
			<Route
				path="/SonyBVW60"
				element={<SonyBVW60 />}
			/>
			<Route
				path="/SonyPVW2600"
				element={<SonyPVW2600 />}
			/>
			<Route
				path="/SonyPVW2650"
				element={<SonyPVW2650 />}
			/>
			<Route
				path="/SonyBVW75PPal"
				element={<SonyBVW75PPal />}
			/>

			<Route
				path="/RTI6120"
				element={<RTI6120 />}
			/>
			<Route
				path="/SonyBVU820"
				element={<SonyBVU820 />}
			/>
			<Route
				path="/SonyVO9850TC"
				element={<SonyVO9850TC />}
			/>
			<Route
				path="/SonyDVWM2000PPal"
				element={<SonyDVWM2000PPal />}
			/>
			<Route
				path="/SonyUVW1400PPal"
				element={<SonyUVW1400PPal />}
			/>
			<Route
				path="/SonyJ30SDI"
				element={<SonyJ30SDI />}
			/>
			<Route
				path="/SonyJ3"
				element={<SonyJ3 />}
			/>
			<Route
				path="/PanasonicAJD960"
				element={<PanasonicAJD960 />}
			/>
			<Route
				path="/SONYHDWF500"
				element={<SONYHDWF500 />}
			/>
			<Route
				path="/SonyHDWM2100"
				element={<SonyHDWM2100 />}
			/>
			<Route
				path="/SonyHDWD2000"
				element={<SonyHDWD2000 />}
			/>
			<Route
				path="/SonyJH3"
				element={<SonyJH3 />}
			/>
			<Route
				path="/SonyPDWHD1500"
				element={<SonyPDWHD1500 />}
			/>
			<Route
				path="/SonyDSR45"
				element={<SonyDSR45 />}
			/>
			<Route
				path="/SonyDSR25"
				element={<SonyDSR25 />}
			/>
			<Route
				path="/WheatstoneD32"
				element={<WheatstoneD32 />}
			/>
			<Route
				path="/SSLC10040"
				element={<SSLC10040 />}
			/>
			<Route
				path="/LeitchX50AV2PS"
				element={<LeitchX50AV2PS />}
			/>
			<Route
				path="/HVS500HS"
				element={<HVS500HS />}
			/>
			<Route
				path="/NVisionEnvoy"
				element={<NVisionEnvoy />}
			/>
			<Route
				path="/PanasonicAGW3P"
				element={<PanasonicAGW3P />}
			/>
			<Route
				path="/PanasonicAGW1PMultisystemVHS"
				element={<PanasonicAGW1PMultisystemVHS />}
			/>
			<Route
				path="/PanasonicAG1980"
				element={<PanasonicAG1980 />}
			/>
			<Route
				path="/PanasonicAG7750"
				element={<PanasonicAG7750 />}
			/>
			<Route
				path="/PanasonicAG7500"
				element={<PanasonicAG7500 />}
			/>
			<Route
				path="/JVCBRS525DXU"
				element={<JVCBRS525DXU />}
			/>

			<Route
				path="/SonyTrinitronPVM2530"
				element={<SonyTrinitronPVM2530 />}
			/>
			<Route
				path="/SonyPVM2030"
				element={<SonyPVM2030 />}
			/>
			<Route
				path="/SonyPVM14L2"
				element={<SonyPVM14L2 />}
			/>
			<Route
				path="/SonyPVM14M4U"
				element={<SonyPVM14M4U />}
			/>
			<Route
				path="/PanasonicBT4LH"
				element={<PanasonicBT4LH />}
			/>
			<Route
				path="/SonyTrinitronBVM20F1U"
				element={<SonyTrinitronBVM20F1U />}
			/>
			<Route
				path="/VintenOspreyElitePedestalwVector75Head"
				element={<VintenOspreyElitePedestalwVector75Head />}
			/>
			<Route
				path="/Vinten3702FulmarCameraTripodStudioPedestal"
				element={<Vinten3702FulmarCameraTripodStudioPedestal />}
			/>
			<Route
				path="/SachtlerVideo20"
				element={<SachtlerVideo20 />}
			/>
			<Route
				path="/VintenVector70"
				element={<VintenVector70 />}
			/>
			<Route
				path="/VintenVector90"
				element={<VintenVector90 />}
			/>
			<Route
				path="/SonyDXC960MD"
				element={<SonyDXC960MD />}
			/>
			<Route
				path="/PanasonicAJHVF21G"
				element={<PanasonicAJHVF21G />}
			/>

			<Route
				path="/FujinonHA26x67BESME18"
				element={<FujinonHA26x67BESME18 />}
			/>
			<Route
				path="/FujinonUA107x84BESMT454K"
				element={<FujinonUA107x84BESMT454K />}
			/>
			<Route
				path="/CanonHJ4010BIASDV"
				element={<CanonHJ4010BIASDV />}
			/>

			<Route
				path="/PanasonicAGHMC80"
				element={<PanasonicAGHMC80 />}
			/>
			<Route
				path="/SonyHXC100"
				element={<SonyHXC100 />}
			/>
			<Route
				path="/SonyPXWZ150"
				element={<SonyPXWZ150 />}
			/>
			<Route
				path="/SonyPMWEX1"
				element={<SonyPMWEX1 />}
			/>
			<Route
				path="/SonyPMWEX3"
				element={<SonyPMWEX3 />}
			/>
			<Route
				path="/SonyPMW300K1"
				element={<SonyPMW300K1 />}
			/>
			<Route
				path="/SonyPMW200"
				element={<SonyPMW200 />}
			/>
			<Route
				path="/ArriAlexaclassiccamera"
				element={<ArriAlexaclassiccamera />}
			/>

			<Route
				path="/2-inch-quad"
				element={<Inchquad />}
			/>
			<Route
				path="/dAs"
				element={<DAs />}
			/>
			<Route
				path="/tripod-heads"
				element={<Tripodheads />}
			/>
			<Route
				path="/tripods"
				element={<Tripods />}
			/>
			<Route
				path="/ccd-cameras"
				element={<CCDCameras />}
			/>
			<Route
				path="/view-finders"
				element={<ViewFinders />}
			/>
			<Route
				path="/xd-cam"
				element={<XDCAM />}
			/>
			<Route
				path="/dvcammnidv"
				element={<DVCAMMNIDV />}
			/>
			<Route
				path="/beta-decks"
				element={<BetaDecks />}
			/>
			<Route
				path="/beta-cam-sp"
				element={<BETACAMSP />}
			/>
			<Route
				path="/SonySRW58002"
				element={<SonySRW58002 />}
			/>
			<Route
				path="/SonySLO1800Betamax"
				element={<SonySLO1800Betamax />}
			/>
			<Route
				path="/AMPEXAVR2"
				element={<AMPEXAVR2 />}
			/>
			<Route
				path="/GrassValley85508551"
				element={<GrassValley85508551 />}
			/>

			<Route
				path="/dv-cam"
				element={<Dvcam />}
			/>
			<Route
				path="/camera-tripod-&-lenses"
				element={<Tripodlenses />}
			/>

			<Route
				path="/AntonBauer3013"
				element={<AntonBauer3013 />}
			/>
			<Route
				path="/AntonBauerDigitalProPac14Logic"
				element={<AntonBauerDigitalProPac14Logic />}
			/>
			<Route
				path="/AntonBauerHYTRON100"
				element={<AntonBauerHYTRON100 />}
			/>
			<Route
				path="/AntonBauerHYTRON140"
				element={<AntonBauerHYTRON140 />}
			/>
			<Route
				path="/AntonBauerPOWERSTRAP13"
				element={<AntonBauerPOWERSTRAP13 />}
			/>
			<Route
				path="/AntonBauerPROPAC14Logic"
				element={<AntonBauerPROPAC14Logic />}
			/>
			<Route
				path="/AntonBauerQUAD2702InterActive2000"
				element={<AntonBauerQUAD2702InterActive2000 />}
			/>
			<Route
				path="/AntonBauerUltraDAYlight"
				element={<AntonBauerUltraDAYlight />}
			/>
			<Route
				path="/ASPENJVCKIT2"
				element={<ASPENJVCKIT2 />}
			/>

			<Route
				path="/top-tbc"
				element={<Tbc />}
			/>
			<Route
				path="/top-frame-synchronizer-converter"
				element={<FrameSynchronizerConverter />}
			/>
			<Route
				path="/top-ntsc-signal-generator"
				element={<NTSCSignalGenerator />}
			/>
			<Route
				path="/top-vectorscope"
				element={<Vectorscope />}
			/>
			<Route
				path="/waveform-monitors"
				element={<WaveformMonitors />}
			/>
			<Route
				path="/encoder-decoder"
				element={<EncoderDecoder />}
			/>
			<Route
				path="/professional-video-i-o-with-tb3"
				element={<ProfessionalVideoIOwithTB3 />}
			/>
			<Route
				path="/DPS295"
				element={<DPS295 />}
			/>
			<Route
				path="/AJAFS1"
				element={<AJAFS1 />}
			/>
			<Route
				path="/AJAFS2"
				element={<AJAFS2 />}
			/>
			<Route
				path="/AJAIo4KPlus"
				element={<AJAIo4KPlus />}
			/>
			<Route
				path="/TektronixTSG170A"
				element={<TektronixTSG170A />}
			/>
			<Route
				path="/Tektronix1720"
				element={<Tektronix1720 />}
			/>
			<Route
				path="/Tektronix1730"
				element={<Tektronix1730 />}
			/>
			<Route
				path="/DBX150X"
				element={<DBX150X />}
			/>
			<Route
				path="/DolbyModel363SRA"
				element={<DolbyModel363SRA />}
			/>

			<Route
				path="/hi8"
				element={<Hi8 />}
			/>
			<Route
				path="/top-svhs"
				element={<Svhs />}
			/>
			<Route
				path="/SonyDSR2000"
				element={<SonyDSR2000 />}
			/>
			<Route
				path="/JVCBRS822DXU"
				element={<JVCBRS822DXU />}
			/>
			<Route
				path="/MitsubishiHSU776"
				element={<MitsubishiHSU776 />}
			/>
			<Route
				path="/SonyEVO9800"
				element={<SonyEVO9800 />}
			/>
			<Route
				path="/Sony0DVWM2000"
				element={<Sony0DVWM2000 />}
			/>
			<Route
				path="/top-super-betamax"
				element={<SuperBetamax />}
			/>
			<Route
				path="/SonySLHF860D"
				element={<SonySLHF860D />}
			/>
			<Route
				path="/SonyGVD200"
				element={<SonyGVD200 />}
			/>
			<Route
				path="/top-digital-hi8-deck"
				element={<DigitalHi8deck />}
			/>
			<Route
				path="/TVLogic"
				element={<TVLogic />}
			/>
			<Route
				path="/IkegamiTM2080R"
				element={<IkegamiTM2080R />}
			/>
			<Route
				path="/top-monitor-with-sdi"
				element={<MonitorwithSDI />}
			/>

			<Route
				path="/SonyPCMR700"
				element={<SonyPCMR700 />}
			/>
			<Route
				path="/UREI1176"
				element={<UREI1176 />}
			/>
			<Route
				path="/Bryston3B"
				element={<Bryston3B />}
			/>
			<Route
				path="/SoundcraftDeltaDLXAudioMixer"
				element={<SoundcraftDeltaDLXAudioMixer />}
			/>
			<Route
				path="/RevoxA77OpenReel"
				element={<RevoxA77OpenReel />}
			/>
			<Route
				path="/SonyTCOpenReelTrack"
				element={<SonyTCOpenReelTrack />}
			/>
			<Route
				path="/TEACA2300SDOpenReel"
				element={<TEACA2300SDOpenReel />}
			/>
			<Route
				path="/AmpexAG440"
				element={<AmpexAG440 />}
			/>
			<Route
				path="/RanePEAudioFilterSets"
				element={<RanePEAudioFilterSets />}
			/>
			<Route
				path="/LynxHiloConverterSystems"
				element={<LynxHiloConverterSystems />}
			/>
			<Route
				path="/TEACANDolbyNoiseReductionUnit"
				element={<TEACANDolbyNoiseReductionUnit />}
			/>
			<Route
				path="/DenonDNMultiSourceCDPlayer"
				element={<DenonDNMultiSourceCDPlayer />}
			/>
			<Route
				path="/TannoyLittleGoldMonitor"
				element={<TannoyLittleGoldMonitor />}
			/>
			<Route
				path="/UniversalAudioLNLimiter"
				element={<UniversalAudioLNLimiter />}
			/>
			<Route
				path="/Bryston3BAmplifier"
				element={<Bryston3BAmplifier />}
			/>
			<Route
				path="/FurmanARPROACLineRegulatorA"
				element={<FurmanARPROACLineRegulatorA />}
			/>
			<Route
				path="/FurmanARPROACLineRegulatorB"
				element={<FurmanARPROACLineRegulatorB />}
			/>

			<Route
				path="/p2-hdr-hd-camcorder"
				element={<P2HDRHDCamcorder />}
			/>
			<Route
				path="/PanasonicAJPX5100"
				element={<PanasonicAJPX5100 />}
			/>
			<Route
				path="/PanasonicAJHPX3000"
				element={<PanasonicAJHPX3000 />}
			/>
			<Route
				path="/SonyHDWF900R"
				element={<SonyHDWF900R />}
			/>
			<Route
				path="/hd-cam-camcorders"
				element={<HDCAMCamcorders />}
			/>
			<Route
				path="/FujinonZK1990mm"
				element={<FujinonZK1990mm />}
			/>
			<Route
				path="/FujinonZK85300mm"
				element={<FujinonZK85300mm />}
			/>
			<Route
				path="/SONYPCM7040"
				element={<SONYPCM7040 />}
			/>
			<Route
				path="/LexiconPCM90"
				element={<LexiconPCM90 />}
			/>

			<Route
				path="/ForAHVS390HS"
				element={<ForAHVS390HS />}
			/>
			<Route
				path="/LargeScaleMediaMigration"
				element={<LargeScaleMediaMigration />}
			/>

			<Route
				path="/PanasonicAVUHS500"
				element={<PanasonicAVUHS500 />}
			/>
			<Route
				path="/SonyHDWM200020"
				element={<SonyHDWM200020 />}
			/>
			<Route
				path="/SonyPDWF800"
				element={<SonyPDWF800 />}
			/>
			<Route
				path="/SonyPXWFS5MKII"
				element={<SonyPXWFS5MKII />}
			/>
			<Route
				path="/digital-betacam-camcorder"
				element={<Digitalbetacamcamcorder />}
			/>
			<Route
				path="/DVW709WSP"
				element={<DVW709WSP />}
			/>
			<Route
				path="/CinemaEOSCamcorder"
				element={<CinemaEOSCamcorder />}
			/>
			<Route
				path="/CANONEOSC300"
				element={<CANONEOSC300 />}
			/>
			<Route
				path="/hd-studio-cameras"
				element={<IHDStudioCameras />}
			/>
			<Route
				path="/HitachiZHD6000"
				element={<HitachiZHD6000 />}
			/>
			<Route
				path="/HitachiZHD5000"
				element={<HitachiZHD5000 />}
			/>

			<Route
				path="/SonyUVW18000"
				element={<SonyUVW18000 />}
			/>
			<Route
				path="/SonyBVW75"
				element={<SonyBVW75 />}
			/>
			<Route
				path="/SonyBVW70"
				element={<SonyBVW70 />}
			/>
			<Route
				path="/SonyPVW2800"
				element={<SonyPVW2800 />}
			/>
			<Route
				path="/SonyUVW1200"
				element={<SonyUVW1200 />}
			/>
			<Route
				path="/SonyUVW1400"
				element={<SonyUVW1400 />}
			/>
			<Route
				path="/SonyUVW1800"
				element={<SonyUVW1800 />}
			/>

			<Route
				path="/SonyVP7040"
				element={<SonyVP7040 />}
			/>
			<Route
				path="/SonyBVU850"
				element={<SonyBVU850 />}
			/>
			<Route
				path="/SonyBVU900"
				element={<SonyBVU900 />}
			/>
			<Route
				path="/sony-bvu-950"
				element={<SonyBVU950P />}
			/>
			<Route
				path="/SonyVO9600P"
				element={<SonyVO9600P />}
			/>
			<Route
				path="/SonyVO9850P"
				element={<SonyVO9850P />}
			/>
			<Route
				path="/SonyVO9800"
				element={<SONYVO9800 />}
			/>
			<Route
				path="/SonyVO7630"
				element={<SonyVO7630 />}
			/>

			<Route
				path="/track-recorder"
				element={<TrackRecorder />}
			/>
			<Route
				path="/AMPEXATR124"
				element={<AMPEXATR124 />}
			/>
			<Route
				path="/AJHD1700"
				element={<AJHD1700 />}
			/>
			<Route
				path="/AJHD1400"
				element={<AJHD1400 />}
			/>
			<Route
				path="/SonyDVR10"
				element={<SonyDVR10 />}
			/>
			<Route
				path="/SONYDVR2000"
				element={<SONYDVR2000 />}
			/>

			<Route
				path="/d2"
				element={<D2 />}
			/>
			<Route
				path="/d1-tapes"
				element={<Done />}
			/>
			<Route
				path="/Midas"
				element={<Midas />}
			/>
			<Route
				path="/Clearcom"
				element={<Clearcom />}
			/>
			<Route
				path="/Fujinon2"
				element={<Fujinon2 />}
			/>
			<Route
				path="/Fujinon1"
				element={<Fujinon1 />}
			/>
			<Route
				path="/hd-cam-sr"
				element={<Hdcamsr />}
			/>
			<Route
				path="/SonySRW5500"
				element={<SonySRW5500 />}
			/>
			<Route
				path="/top-hd-cam-editing-recorder"
				element={<HDCAMEditingRecorder />}
			/>
			<Route
				path="/SonyHDW1800"
				element={<SonyHDW1800 />}
			/>
			<Route
				path="/SonyBVMD20F1U"
				element={<SonyBVMD20F1U />}
			/>
			<Route
				path="/top-DVCPRO"
				element={<DVCPRO />}
			/>

			<Route
				path="/HDCAMEDITING"
				element={<HDCAMEDITING />}
			/>

			<Route
				path="/mii"
				element={<Mii />}
			/>
			<Route
				path="/PanasonicAU65"
				element={<PanasonicAU65 />}
			/>
			<Route
				path="/PanasonicAU650"
				element={<PanasonicAU650 />}
			/>
			<Route
				path="/PanasonicAUW35HP"
				element={<PanasonicAUW35HP />}
			/>
			<Route
				path="/NewTekTriCaster"
				element={<NewTekTriCaster />}
			/>
			<Route
				path="/RTIProLine"
				element={<RTIProLine />}
			/>
			<Route
				path="/PanasonicAGHPX600"
				element={<PanasonicAGHPX600 />}
			/>
			<Route
				path="/BlackmagicDesignURSA"
				element={<BlackmagicDesignURSA />}
			/>

			<Route
				path="/SonyVO5850"
				element={<SonyVO5850 />}
			/>
			<Route
				path="/SonyVP9000"
				element={<SonyVP9000 />}
			/>
			<Route
				path="/SonyVP7000"
				element={<SonyVP7000 />}
			/>
			<Route
				path="/SONYBVU800"
				element={<SONYBVU800 />}
			/>
			<Route
				path="/SONYVO9850"
				element={<SONYVO9850 />}
			/>
			<Route
				path="/SonyVP5020"
				element={<SonyVP5020 />}
			/>
			<Route
				path="/SONYVO9800"
				element={<SONYVO9800 />}
			/>

			<Route
				path="/video-tape-encoding-services"
				element={<VideotapeEncodingServices />}
			/>

			<Route
				path="/the-broadcast-store"
				element={<BroadcastStore />}
			/>
			<Route
				path="/sonybvu950"
				element={<SonyBvu950 />}
			/>
			<Route
				path="/locations"
				element={<Locations />}
			/>
			<Route
				path="/policies"
				element={<Policies />}
			/>
			<Route
				path="/repairservice"
				element={<RepairService />}
			/>
			<Route
				path="/request-a-call"
				element={<Requestacall />}
			/>
			<Route
				path="/Financing"
				element={<Financing />}
			/>
			<Route
				path="/Shipping"
				element={<Shipping />}
			/>
			<Route
				path="/NexioNxAmp"
				element={<NexioNxAmp />}
			/>
			<Route
				path="/Enquiry"
				element={<Enquiry />}
			/>
			<Route
				path="/Ikegami"
				element={<Ikegami />}
			/>
			<Route
				path="/Jvcdv"
				element={<Jvcdv />}
			/>
			<Route
				path="/Jvcav"
				element={<Jvcav />}
			/>
			<Route
				path="/Jvcky"
				element={<Jvcky />}
			/>
			<Route
				path="/Jvcavp"
				element={<Jvcavp />}
			/>
			<Route
				path="/broadcaststore1inchtype"
				element={<BroadcastStore1InchType />}
			/>
			<Route
				path="/broadcaststorebeta"
				element={<BroadcastStoreBeta />}
			/>
			<Route
				path="/broadcaststore2InchQuadruplex"
				element={<BroadcastStore2InchQuadruplex />}
			/>
			<Route
				path="/broadcaststorematictape"
				element={<BroadcastStoreMatictape />}
			/>
			<Route
				path="/Broadcaststore16mm"
				element={<Broadcaststore16mm />}
			/>
			<Route
				path="/Canon"
				element={<Canon />}
			/>
			<Route
				path="/CanonDIGI"
				element={<CanonDIGI />}
			/>
			<Route
				path="/CanonDVM"
				element={<CanonDVM />}
			/>
			<Route
				path="/CanonXL2"
				element={<CanonXL2 />}
			/>
			<Route
				path="/CanonXL1S"
				element={<CanonXL1S />}
			/>
			<Route
				path="/WiFi"
				element={<WiFi />}
			/>
			<Route
				path="/Chromecast"
				element={<Chromecast />}
			/>
			<Route
				path="/Applemonitor"
				element={<Applemonitor />}
			/>
			<Route
				path="/SpeakerAlesis"
				element={<SpeakerAlesis />}
			/>
			<Route
				path="/A4Techheadset"
				element={<A4Techheadset />}
			/>
			<Route
				path="/Ipadpro"
				element={<Ipadpro />}
			/>
			<Route
				path="/computers-&-software"
				element={<Computers />}
			/>
			<Route
				path="/Cameras"
				element={<Cameras />}
			/>
			<Route
				path="/amxaxdca10"
				element={<AmxAxdCa10 />}
			/>
			<Route
				path="/amxaxdca10pb"
				element={<AmxAxdCa10pb />}
			/>
			<Route
				path="/amxaxtca10"
				element={<AmxAxtCa10 />}
			/>
			<Route
				path="/lenses"
				element={<Lenses />}
			/>
			<Route
				path="/camcorders"
				element={<Camcorders />}
			/>
			<Route
				path="/lights-&-studios"
				element={<Lights />}
			/>
			<Route
				path="/transmitter"
				element={<Transmitter />}
			/>
			<Route
				path="/motion-pictures-film-transer"
				element={<Mpft />}
			/>
			<Route
				path="/audio"
				element={<Audio />}
			/>
			<Route
				path="/thankyou"
				element={<Thankyou />}
			/>
			<Route
				path="/lipsnersmith"
				element={<LipsnerSmith />}
			/>
			<Route
				path="/test"
				element={<Test />}
			/>
			<Route
				path="/D29wstlx"
				element={<D29wstlx />}
			/>
			<Route
				path="/D29wuch"
				element={<D29wuch />}
			/>
			<Route
				path="/F1030U"
				element={<F1030U />}
			/>
			<Route
				path="/KYf32u"
				element={<KYf32u />}
			/>
			<Route
				path="/Betacamsx"
				element={<Betacamsx />}
			/>
			<Route
				path="/D2videotape"
				element={<D2videotape />}
			/>
			<Route
				path="/Videotapetransfer"
				element={<Videotapetransfer />}
			/>
			<Route
				path="/Betacamptape"
				element={<Betacamptape />}
			/>
			<Route
				path="/Canonfc"
				element={<Canonfc />}
			/>
			<Route
				path="/Canonp2"
				element={<Canonp2 />}
			/>
			<Route
				path="/Canonp3"
				element={<Canonp3 />}
			/>
			<Route
				path="/Canonp4"
				element={<Canonp4 />}
			/>
			<Route
				path="/Canonp5"
				element={<Canonp5 />}
			/>
			<Route
				path="/Canonp6"
				element={<Canonp6 />}
			/>
			<Route
				path="/top-umatics"
				element={<Umatics />}
			/>
			<Route
				path="/SonyVP7020"
				element={<SonyVP7020 />}
			/>
			<Route
				path="/SonyVO5800"
				element={<SonyVO5800 />}
			/>
			<Route
				path="/digital-beta-cam"
				element={<DigitalBetacam />}
			/>
			<Route
				path="/d3"
				element={<D3 />}
			/>
			<Route
				path="/inch1"
				element={<Inch1 />}
			/>
			<Route
				path="/Sonydvwa"
				element={<Sonydvwa />}
			/>
			<Route
				path="/Sonydvw"
				element={<Sonydvw />}
			/>
			<Route
				path="/Panasonic"
				element={<Panasonic />}
			/>
			<Route
				path="/Sonybvh3000"
				element={<Sonybvh3000 />}
			/>
			<Route
				path="/Sonybvh2000"
				element={<Sonybvh2000 />}
			/>
			<Route
				path="/quad-broadcast"
				element={<Quadbroadcast />}
			/>
			<Route
				path="/GrassValleyLDK600"
				element={<GrassValleyLDK600 />}
			/>
			<Route
				path="/color-monitors"
				element={<ColorMonitors />}
			/>
			<Route
				path="/SonyBVMD32E1WU"
				element={<SonyBVMD32E1WU />}
			/>
			<Route
				path="/SonyFLEXICARTBFC"
				element={<SonyFLEXICARTBFC />}
			/>
			<Route
				path="/top-tape-playback"
				element={<TapePlayback />}
			/>
			<Route
				path="/top-tape-cleaners"
				element={<Tapeleaners />}
			/>
			<Route
				path="/RTIVT3100"
				element={<RTIVT3100 />}
			/>
			<Route
				path="/RTI4100"
				element={<RTI4100 />}
			/>
			<Route
				path="/Blackmagic"
				element={<Blackmagic />}
			/>
			<Route
				path="/switchers"
				element={<Switchers />}
			/>
			<Route
				path="/GrassValleyKALYPSO"
				element={<GrassValleyKALYPSO />}
			/>
			<Route
				path="/SonyDVWA500"
				element={<SonyDVWA500 />}
			/>
		</Routes>
	);
};

export default BroadRoutes;
