import React, { useState } from 'react';

// Import all tab components
import AllProjectsTab from '../components/project-page/AllProjectsTab';
import ConcreteWorksTab from '../components/project-page/ConcreteWorksTab';
import WaterproofingTab from '../components/project-page/WaterproofingTab';
import RenovationsTab from '../components/project-page/RenovationsTab';
import BoundaryWallsTab from '../components/project-page/BoundaryWallsTab';
import BraaiAreasTab from '../components/project-page/BraaiAreasTab';
import PaintingTab from '../components/project-page/PaintingTab';
import FlooringTab from '../components/project-page/FlooringTab';
import RoofingTab from '../components/project-page/RoofingTab';
import PavingGallery from '../components/project-page/PavingGallery';
import AluminiumDoorsGallery from '../components/project-page/AluminiumDoorsGallery';
import ProjectDetailView from '../components/project-page/ProjectDetailView';

// Import all project images
import goodwoodMain from '../assets/projects/waterproofing/tiling-and-waterproofing/tiling-and-waterproofing.jpg';
import goodwood1 from '../assets/projects/waterproofing/tiling-and-waterproofing/tiling-and-waterproofing-1.jpg';
import goodwood2 from '../assets/projects/waterproofing/tiling-and-waterproofing/tiling-and-waterproofing-2.jpg';
import goodwood3 from '../assets/projects/waterproofing/tiling-and-waterproofing/tiling-and-waterproofing-3.jpg';
import goodwood4 from '../assets/projects/waterproofing/tiling-and-waterproofing/tiling-and-waterproofing-4.jpg';
import goodwood5 from '../assets/projects/waterproofing/tiling-and-waterproofing/tiling-and-waterproofing-5.jpg';

import roofingCampsBayMain from '../assets/projects/waterproofing/camps-bay-roofing/camps-bay-roofing.jpg';
import roofingCampsBay1 from '../assets/projects/waterproofing/camps-bay-roofing/camps-bay-roofing-1.jpg';
import roofingCampsBay2 from '../assets/projects/waterproofing/camps-bay-roofing/camps-bay-roofing-2.jpg';
import roofingCampsBay3 from '../assets/projects/waterproofing/camps-bay-roofing/camps-bay-roofing-3.jpg';
import roofingCampsBay4 from '../assets/projects/waterproofing/camps-bay-roofing/camps-bay-roofing-4.jpg';

import roofReplacementMain from '../assets/projects/roofing/roof-replacement.jpg';
import roofReplacement1 from '../assets/projects/roofing/roof-replacement-1.jpg';
import roofReplacement2 from '../assets/projects/roofing/roof-replacement-2.jpg';
import roofReplacement3 from '../assets/projects/roofing/roof-replacement-3.jpg';

import crackRepairsMain from '../assets/projects/structural-crack-repairs/structural-crack-repair/crack-repairs.jpg';
import crackRepairs1 from '../assets/projects/structural-crack-repairs/structural-crack-repair/crack-repairs-1.jpg';
import crackRepairs2 from '../assets/projects/structural-crack-repairs/structural-crack-repair/crack-repairs-2.jpg';
import crackRepairs3 from '../assets/projects/structural-crack-repairs/structural-crack-repair/crack-repairs-3.jpg';
import crackRepairs4 from '../assets/projects/structural-crack-repairs/structural-crack-repair/crack-repairs-4.jpg';
import crackRepairs5 from '../assets/projects/structural-crack-repairs/structural-crack-repair/crack-repairs-5.jpg';
import crackRepairs6 from '../assets/projects/structural-crack-repairs/structural-crack-repair/crack-repairs-6.jpg';

import parklandsCrackMain from '../assets/projects/structural-crack-repairs/structural-crack-repairs.jpg';
import parklandsCrack1 from '../assets/projects/structural-crack-repairs/structural-crack-repairs-1.jpg';
import parklandsCrack2 from '../assets/projects/structural-crack-repairs/structural-crack-repairs-2.jpg';
import parklandsCrack3 from '../assets/projects/structural-crack-repairs/structural-crack-repairs-3.jpg';
import parklandsCrack4 from '../assets/projects/structural-crack-repairs/structural-crack-repairs-4.jpg';
import parklandsCrack5 from '../assets/projects/structural-crack-repairs/structural-crack-repairs-5.jpg';
import parklandsCrack6 from '../assets/projects/structural-crack-repairs/structural-crack-repairs-6.jpg';
import parklandsCrack7 from '../assets/projects/structural-crack-repairs/structural-crack-repairs-7.jpg';

import paintingMain from '../assets/projects/painting-worx/painting-worx.jpg';
import painting1 from '../assets/projects/painting-worx/painting-worx-1.jpg';
import painting2 from '../assets/projects/painting-worx/painting-worx-2.jpg';
import painting3 from '../assets/projects/painting-worx/painting-worx-3.jpg';
import painting4 from '../assets/projects/painting-worx/painting-worx-4.jpg';
import painting5 from '../assets/projects/painting-worx/painting-worx-5.jpg';

import extensionMain from '../assets/projects/house-extension/house-extension.jpg';
import extensionAluminium from '../assets/projects/house-extension/aluminium-windows.jpg';
import extensionBrick1 from '../assets/projects/house-extension/brick-work-1.jpg';
import extensionBrick2 from '../assets/projects/house-extension/brick-work-2.jpg';
import extensionBrick3 from '../assets/projects/house-extension/brick-work-3.jpg';
import extensionBrick4 from '../assets/projects/house-extension/brick-work-4.jpg';
import extensionBrickMain from '../assets/projects/house-extension/brick-work.jpg';
import extensionPlastering1 from '../assets/projects/house-extension/plastering-1.jpg';
import extensionPlasteringAluminium from '../assets/projects/house-extension/plastering-aluminium-windows.jpg';
import extensionPlumbingPlastering from '../assets/projects/house-extension/plumbing-and-plastering.jpg';
import extensionRoofingMain from '../assets/projects/house-extension/roofing.jpg';
import extensionRoofing1 from '../assets/projects/house-extension/roofing-1.jpg';
import extensionRoofing2 from '../assets/projects/house-extension/roofing-2.jpg';

import tilingMain from '../assets/projects/tiling/bothasig/tiling.jpg';
import tiling1 from '../assets/projects/tiling/bothasig/tiling-1.jpg';
import tiling2 from '../assets/projects/tiling/bothasig/tiling-2.jpg';
import tiling3 from '../assets/projects/tiling/bothasig/tiling-3.jpg';
import tiling4 from '../assets/projects/tiling/bothasig/tiling-4.jpg';
import tiling5 from '../assets/projects/tiling/bothasig/tiling-5.jpg';

import tilingEdgemeadMain from '../assets/projects/tiling/edgemead/tiling-edgemead.jpg';
import tilingEdgemead1 from '../assets/projects/tiling/edgemead/tiling-edgemead-1.jpg';
import tilingEdgemead2 from '../assets/projects/tiling/edgemead/tiling-edgemead-2.jpg';
import tilingEdgemead3 from '../assets/projects/tiling/edgemead/tiling-edgemead-3.jpg';
import tilingEdgemead4 from '../assets/projects/tiling/edgemead/tiling-edgemead-4.jpg';

import wallOpeningMain from '../assets/projects/wall-opening/wall-opening.jpg';
import wallOpening1 from '../assets/projects/wall-opening/wall-opening-1.jpg';
import wallOpening2 from '../assets/projects/wall-opening/wall-opening-2.jpg';
import wallOpening3 from '../assets/projects/wall-opening/wall-opening-3.jpg';
import wallOpening4 from '../assets/projects/wall-opening/wall-opening-4.jpg';

import houseRepairsMain from '../assets/projects/house-repairing/house-repairs.jpg';
import houseRepairs1 from '../assets/projects/house-repairing/house-repairs-1.jpg';
import houseRepairs2 from '../assets/projects/house-repairing/house-repairs-2.jpg';
import houseRepairs3 from '../assets/projects/house-repairing/house-repairs-3.jpg';
import houseRepairs4 from '../assets/projects/house-repairing/house-repairs-4.jpg';
import houseRepairs5 from '../assets/projects/house-repairing/house-repairs-5.jpg';
import houseRepairs6 from '../assets/projects/house-repairing/house-repairs-6.jpg';
import houseRepairs7 from '../assets/projects/house-repairing/house-repairs-7.jpg';
import houseRepairs8 from '../assets/projects/house-repairing/house-repairs-8.jpg';
import houseRepairs9 from '../assets/projects/house-repairing/house-repairs-9.jpg';
import houseRepairs10 from '../assets/projects/house-repairing/house-repairs-10.jpg';
import houseRepairs11 from '../assets/projects/house-repairing/house-repairs-11.jpg';

import wallDemolishMain from '../assets/projects/wall-demolition/wall-demolish.jpg';
import wallDemolish1 from '../assets/projects/wall-demolition/wall-demolish-1.jpg';
import wallDemolish2 from '../assets/projects/wall-demolition/wall-demolish-2.jpg';
import wallRebuildMain from '../assets/projects/wall-demolition/wall-rebuild.jpg';
import wallRebuild1 from '../assets/projects/wall-demolition/wall-rebuild-1.jpg';
import wallRebuild2 from '../assets/projects/wall-demolition/wall-rebuild-2.jpg';
import wallRebuild3 from '../assets/projects/wall-demolition/wall-rebuild-3.jpg';
import wallRebuild4 from '../assets/projects/wall-demolition/wall-rebuild-4.jpg';

import braaiMain from '../assets/projects/braai/built-in-braai.jpg';
import braai1 from '../assets/projects/braai/built-in-braai-1.jpg';
import braai2 from '../assets/projects/braai/built-in-braai-2.jpg';
import braai3 from '../assets/projects/braai/built-in-braai-3.jpg';
import braai4 from '../assets/projects/braai/built-in-braai-4.jpg';
import braai5 from '../assets/projects/braai/built-in-braai-5.jpg';

import slabFloorMain from '../assets/projects/slab-floor/slab-floor.jpg';
import slabFloor1 from '../assets/projects/slab-floor/slab-floor-1.jpg';
import slabFloor2 from '../assets/projects/slab-floor/slab-floor-2.jpg';
import slabFloor3 from '../assets/projects/slab-floor/slab-floor-3.jpg';
import slabFloor4 from '../assets/projects/slab-floor/slab-floor-4.jpg';
import slabFloor5 from '../assets/projects/slab-floor/slab-floor-5.jpg';
import slabFloor6 from '../assets/projects/slab-floor/slab-floor-6.jpg';
import slabFloor7 from '../assets/projects/slab-floor/slab-floor-7.jpg';
import slabFloor8 from '../assets/projects/slab-floor/slab-floor-8.jpg';
import slabFloor9 from '../assets/projects/slab-floor/slab-floor-9.jpg';
import slabFloor10 from '../assets/projects/slab-floor/slab-floor-10.jpg';
import slabFloor11 from '../assets/projects/slab-floor/slab-floor-11.jpg';
import slabFloor12 from '../assets/projects/slab-floor/slab-floor-12.jpg';
import slabFloor13 from '../assets/projects/slab-floor/slab-floor-13.jpg';
import slabFloor14 from '../assets/projects/slab-floor/slab-floor-14.jpg';

import staircaseMain from '../assets/projects/staircase/staircase.jpg';
import staircase1 from '../assets/projects/staircase/staircase-1.jpg';
import staircase2 from '../assets/projects/staircase/staircase-2.jpg';
import staircase3 from '../assets/projects/staircase/staircase-3.jpg';
import staircase4 from '../assets/projects/staircase/staircase-4.jpg';
import staircase5 from '../assets/projects/staircase/staircase-5.jpg';

import boundaryWallMain from '../assets/projects/boundary-wall/boundry-wall.jpg';
import boundaryWall1 from '../assets/projects/boundary-wall/boundry-wall-1.jpg';
import boundaryWall2 from '../assets/projects/boundary-wall/boundry-wall-2.jpg';
import boundaryWall3 from '../assets/projects/boundary-wall/boundry-wall-3.jpg';
import boundaryWall4 from '../assets/projects/boundary-wall/boundry-wall-4.jpg';
import boundaryWall5 from '../assets/projects/boundary-wall/boundry-wall-5.jpg';
import boundaryWall6 from '../assets/projects/boundary-wall/boundry-wall-6.jpg';

import nutecGateMain from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall.jpg';
import nutecGate1 from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall-1.jpg';
import nutecGate2 from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall-2.jpg';
import nutecGate3 from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall-3.jpg';
import nutecGate4 from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall-4.jpg';
import nutecGate5 from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall-5.jpg';
import nutecGate6 from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall-6.jpg';
import nutecGate7 from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall-7.jpg';
import nutecGate8 from '../assets/projects/nutec-gate-and-boundary-wall/nutec-gate-and-boundary-wall-8.jpg';

const projectsList = [
  {
    id: "plattekloof-glen-roof",
    title: "Comprehensive Residential Roof Replacement",
    location: "Plattekloof Glen, Cape Town",
    category: "Roofing",
    scope: "Structural Roof Inspection, Tile/Sheet Removal & Full Re-Roofing Installation",
    image: roofReplacementMain,
    images: [roofReplacementMain, roofReplacement1, roofReplacement2, roofReplacement3],
    details: "End-to-end roof replacement program designed to restore structural integrity and weatherproofing efficiency..."
  },
  {
    id: "goodwood-tiling-waterproofing",
    title: "Premium Structural Waterproofing & Advanced Surface Tiling Systems",
    location: "Goodwood, Cape Town",
    category: "Waterproofing",
    scope: "Substrate Priming, Multi-Layer Waterproofing Membranes & Precision small-Format Tiling",
    image: goodwoodMain,
    images: [goodwoodMain, goodwood1, goodwood2, goodwood3, goodwood4, goodwood5],
    details: "High-precision surface overhaul managing moisture remediation and decorative porcelain structural applications..."
  },
  {
    id: "camps-bay-roofing-waterproofing",
    title: "Premium Roof Slates, Tiles Replacement & Waterproofing Overhaul",
    location: "Camps Bay, Cape Town",
    category: "Waterproofing",
    scope: "Slate/Tile Replacement, High-Durability Waterproofing & Precision Roof Painting",
    image: roofingCampsBayMain,
    images: [roofingCampsBayMain, roofingCampsBay1, roofingCampsBay2, roofingCampsBay3, roofingCampsBay4],
    details: "High-end coastal property asset preservation featuring a comprehensive slate and tile replacement matrix..."
  },
  {
    id: "nutec-gate-boundary-wall-cravenby",
    title: "Premium Nutec Gate Installation & Boundary Wall Construction",
    location: "Cravenby, Western Cape",
    category: "Boundary Walls",
    scope: "Brick-and-Mortar Masonry, Fine Plastering & Custom Nutec Security Gate Installation",
    image: nutecGateMain,
    images: [nutecGateMain, nutecGate1, nutecGate2, nutecGate3, nutecGate4, nutecGate5, nutecGate6, nutecGate7, nutecGate8],
    details: "Turnkey security upgrade featuring the calculation and erection of a brand new structural boundary wall..."
  },
  {
    id: "boundary-wall-big-bay",
    title: "Structural Perimeter Boundary Wall Construction",
    location: "Big Bay, Bloubergstrand",
    category: "Boundary Walls",
    scope: "Foundational Trenching, Reinforced Blockwork & Weather-Resistant Plastering",
    image: boundaryWallMain,
    images: [boundaryWallMain, boundaryWall1, boundaryWall2, boundaryWall3, boundaryWall4, boundaryWall5, boundaryWall6],
    details: "Engineering and construction of a heavy-duty perimeter boundary wall to bolster structural property limits..."
  },
  {
    id: "integrated-concrete-staircase-slab",
    title: "Integrated Concrete Staircase & Suspended Slab Construction",
    location: "Cape Town, Western Cape",
    category: "Concrete Works",
    scope: "Timber Formwork Engineering, Structural Prop Shoring & Precision Monolithic Concrete Pouring",
    image: staircaseMain,
    images: [staircaseMain, staircase1, staircase2, staircase3, staircase4, staircase5],
    details: "Advanced civil modification featuring the precision casting of a reinforced concrete staircase..."
  },
  {
    id: "slab-floor-wellington",
    title: "Engineered Concrete Slab Floor Installation",
    location: "Wellington, Western Cape",
    category: "Concrete Works",
    scope: "Formwork Setting, Steel Reinforcement & Concrete Pouring",
    image: slabFloorMain,
    images: [slabFloorMain, slabFloor1, slabFloor2, slabFloor3, slabFloor4, slabFloor5, slabFloor6, slabFloor7, slabFloor8, slabFloor9, slabFloor10, slabFloor11, slabFloor12, slabFloor13, slabFloor14],
    details: "High-precision civil engineering installation for a durable, level foundational framework..."
  },
  {
    id: "multi-story-crack-repairs",
    title: "Multi-Story Structural Crack Repairs & Masonry Stabilisation",
    location: "Parklands, Cape Town",
    category: "Renovations",
    scope: "High-Access Crack Stitching, Cavity Infill & Weather-Proof Skimming",
    image: parklandsCrackMain,
    images: [parklandsCrackMain, parklandsCrack1, parklandsCrack2, parklandsCrack3, parklandsCrack4, parklandsCrack5, parklandsCrack6, parklandsCrack7],
    details: "Comprehensive exterior restoration of a multi-story residential complex addressing building stress lines..."
  },
  {
    id: "structural-wall-opening-rsj",
    title: "Structural Wall Opening & Load-Bearing RSJ Support Installation",
    location: "Cape Town, Western Province",
    category: "Renovations",
    scope: "Controlled Demolition, Structural Steel Beam Installation & Masonry Rebuild",
    image: crackRepairsMain,
    images: [crackRepairsMain, crackRepairs1, crackRepairs2, crackRepairs3, crackRepairs4, crackRepairs5, crackRepairs6],
    details: "Heavy-duty structural modification within an industrial/warehouse space..."
  },
  {
    id: "house-extension-bothasig",
    title: "Residential House Extension & Roofing Engineering",
    location: "Bothasig, Cape Town",
    category: "Renovations",
    scope: "Brickwork, Roofing, Plastering & Aluminium Window Installations",
    image: extensionMain,
    images: [extensionMain, extensionAluminium, extensionBrickMain, extensionBrick1, extensionBrick2, extensionBrick3, extensionBrick4, extensionPlastering1, extensionPlasteringAluminium, extensionPlumbingPlastering, extensionRoofingMain, extensionRoofing1, extensionRoofing2],
    details: "Major structural additions and modern upgrades to an existing property..."
  },
  {
    id: "wall-opening-edgemead",
    title: "Structural Wall Opening & Architectural Space Modification",
    location: "Edgemead, Cape Town",
    category: "Renovations",
    scope: "Controlled Demolition, Lintels/RSJ Support Installation & Load-Bearing Modifications",
    image: wallOpeningMain,
    images: [wallOpeningMain, wallOpening1, wallOpening2, wallOpening3, wallOpening4],
    details: "Precision structural modification to create an expansive, open-plan living environment..."
  },
  {
    id: "built-in-braai-big-bay",
    title: "Bespoke Built-In Braai & Entertainment Space Brickwork",
    location: "Ocean Tides, Big Bay",
    category: "Braai Areas",
    scope: "Custom Masonry, Structural Brickwork & Custom Chimney Flue Integration",
    image: braaiMain,
    images: [braaiMain, braai1, braai2, braai3, braai4, braai5],
    details: "Premium craftsmanship designed to maximize outdoor entertainment luxury..."
  },
  {
    id: "front-wall-demolition-somerset-west",
    title: "Boundary Wall Demolition & Precision Masonry Rebuild",
    location: "Somerset West, Cape Town",
    category: "Boundary Walls",
    scope: "Controlled Demolition, Structural Footings & Boundary Wall Reconstruction",
    image: wallDemolishMain,
    images: [wallDemolishMain, wallDemolish1, wallDemolish2, wallRebuildMain, wallRebuild1, wallRebuild2, wallRebuild3, wallRebuild4],
    details: "Full civil modification of a residential boundary layout..."
  },
  {
    id: "house-repairs-mitchells-plain",
    title: "Comprehensive Residential Rehabilitation & Damage Repairs",
    location: "Mitchell's Plain, Cape Town",
    category: "Renovations",
    scope: "Structural Renovation, Wall Rehabilitation & Subsurface Remediation",
    image: houseRepairsMain,
    images: [houseRepairsMain, houseRepairs1, houseRepairs2, houseRepairs3, houseRepairs4, houseRepairs5, houseRepairs6, houseRepairs7, houseRepairs8, houseRepairs9, houseRepairs10, houseRepairs11],
    details: "Complete turnkey repair program fixing extensive internal and external domestic deterioration..."
  },
  {
    id: "painting-works-bothasig",
    title: "Professional Exterior & Interior Painting Works",
    location: "Bothasig, Cape Town",
    category: "Painting",
    scope: "Surface Preparation, Priming & Weatherproofing Guard",
    image: paintingMain,
    images: [paintingMain, painting1, painting2, painting3, painting4, painting5],
    details: "Premium residential painting overhaul..."
  },
  {
    id: "premium-tiling-bothasig",
    title: "Premium Residential Flooring & Custom Tiling Solutions",
    location: "Bellevue, Bothasig",
    category: "Flooring",
    scope: "Surface Levelling, Precision Layout & Grouting",
    image: tilingMain,
    images: [tilingMain, tiling1, tiling2, tiling3, tiling4, tiling5],
    details: "Comprehensive, high-end residential interior flooring upgrade..."
  },
  {
    id: "tiling-edgemead",
    title: "Bespoke Residential Tiling & Floor Surface Modification",
    location: "Edgemead, Cape Town",
    category: "Flooring",
    scope: "Sub-floor Leveling, Large Format Tile Cutting & Grout Application",
    image: tilingEdgemeadMain,
    images: [tilingEdgemeadMain, tilingEdgemead1, tilingEdgemead2, tilingEdgemead3, tilingEdgemead4],
    details: "Precision interior floor surfacing across a residential domestic space..."
  }
];

export default function ProjectsPage({ navigateTo }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const brandDark = '#071d46';
  const brandOrange = '#ff5722';

  const getFilteredProjects = () => {
    if (activeFilter === "All") return projectsList;
    if (activeFilter === "Paving" || activeFilter === "Aluminium Doors") return [];
    return projectsList.filter(p => p.category === activeFilter);
  };

  const filteredProjects = getFilteredProjects();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveImgIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  if (selectedProject) {
    return (
      <ProjectDetailView
        selectedProject={selectedProject}
        activeImgIndex={activeImgIndex}
        onBack={handleBackToGrid}
        onPrevImage={prevImage}
        onNextImage={nextImage}
        onThumbnailClick={setActiveImgIndex}
        navigateTo={navigateTo}
        brandDark={brandDark}
        brandOrange={brandOrange}
      />
    );
  }

  const renderTabContent = () => {
    switch(activeFilter) {
      case "All":
        return <AllProjectsTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Concrete Works":
        return <ConcreteWorksTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Waterproofing":
        return <WaterproofingTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Renovations":
        return <RenovationsTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Boundary Walls":
        return <BoundaryWallsTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Braai Areas":
        return <BraaiAreasTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Painting":
        return <PaintingTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Flooring":
        return <FlooringTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Roofing":
        return <RoofingTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Paving":
        return <PavingGallery navigateTo={navigateTo} brandDark={brandDark} brandOrange={brandOrange} />;
      case "Aluminium Doors":
        return <AluminiumDoorsGallery navigateTo={navigateTo} brandDark={brandDark} brandOrange={brandOrange} />;
      default:
        return <AllProjectsTab projects={filteredProjects} onProjectClick={handleProjectClick} brandDark={brandDark} brandOrange={brandOrange} />;
    }
  };

  return (
    <div className="w-full bg-[#f9fafb] min-h-screen pb-20 font-sans relative">
      <div className="w-full text-white flex flex-col justify-center px-6 md:px-12 relative overflow-hidden" style={{ backgroundColor: brandDark, minHeight: '280px' }}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="w-full mx-auto relative z-10" style={{ maxWidth: '1200px' }}>
          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-300 bg-white/10 px-3 py-1 rounded-full">Proven Track Record</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-3">Our Completed Projects</h1>
          <p className="text-sm md:text-base text-slate-300 mt-2 max-w-xl font-medium">
            Take a look at our expert structural modifications, roofing engineering, waterproofing, and premium property transformations across Cape Town.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-10">
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-5 overflow-x-auto scroller-clean">
          {["All", "Concrete Works", "Waterproofing", "Renovations", "Boundary Walls", "Braai Areas", "Painting", "Flooring", "Roofing", "Paving", "Aluminium Doors"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 whitespace-nowrap border-none cursor-pointer ${
                activeFilter === cat ? 'text-white shadow-sm' : 'text-gray-600 bg-white hover:bg-gray-50 border border-gray-200'
              }`}
              style={{ backgroundColor: activeFilter === cat ? brandDark : undefined }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
}