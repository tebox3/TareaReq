CREATE DATABASE IF NOT EXISTS trazabilidad;

use trazabilidad;

-- Table structure for table `comision`
--

CREATE TABLE `comision` (
  `RUT` varchar(16) NOT NULL,
  `NOMBRE` varchar(32) NOT NULL,
  `APELLIDO` varchar(32) NOT NULL,
  `PROFESOR` tinyint(1) NOT NULL,
  `ESCUELA` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `disponibilidad`
--

CREATE TABLE `disponibilidad` (
  `FECHA` date NOT NULL,
  `PERIODO` char(1) NOT NULL,
  `ESTADO` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `estudiante`
--

CREATE TABLE `estudiante` (
  `RUT_ESTUDIANTE` varchar(16) NOT NULL,
  `NOMBRE` varchar(32) NOT NULL,
  `APELLIDO` varchar(32) NOT NULL,
  `CARRERA` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Datos del estudiante';

-- --------------------------------------------------------

--
-- Table structure for table `examen`
--

CREATE TABLE `examen` (
  `ID` int(11) NOT NULL,
  `ID_COMISION` int(11) NOT NULL,
  `RUT_ESTUDIANTE` varchar(16) NOT NULL,
  `ESCUELA` varchar(64) NOT NULL,
  `FECHA` date NOT NULL,
  `PERIODO` char(1) NOT NULL,
  `DESCRIPCION` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `grupo_comision`
--

CREATE TABLE `grupo_comision` (
  `ID` int(11) NOT NULL,
  `RUT_MIEMBRO` varchar(16) NOT NULL,
  `ID_EXAMEN` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `solicitud`
--

CREATE TABLE `solicitud` (
  `ID` int(11) NOT NULL,
  `RUT_ESTUDIANTE` varchar(16) NOT NULL,
  `FECHA_SOLICITUD` date NOT NULL,
  `FECHA_ACORDADA` date NOT NULL,
  `PERIODO` char(1) NOT NULL,
  `DESCRIPCION` text NOT NULL,
  `ESTADO` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comision`
--
ALTER TABLE `comision`
  ADD PRIMARY KEY (`RUT`);

--
-- Indexes for table `disponibilidad`
--
ALTER TABLE `disponibilidad`
  ADD UNIQUE KEY `FECHA` (`FECHA`),
  ADD KEY `PERIODO` (`PERIODO`);

--
-- Indexes for table `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`RUT_ESTUDIANTE`);

--
-- Indexes for table `examen`
--
ALTER TABLE `examen`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_COMISION` (`ID_COMISION`),
  ADD KEY `RUT_` (`RUT_ESTUDIANTE`);

--
-- Indexes for table `grupo_comision`
--
ALTER TABLE `grupo_comision`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `RUT_MIEMBRO` (`RUT_MIEMBRO`),
  ADD KEY `ID_EXAMEN` (`ID_EXAMEN`);

--
-- Indexes for table `solicitud`
--
ALTER TABLE `solicitud`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `RUT` (`RUT_ESTUDIANTE`),
  ADD KEY `FECHA_ACORDADA` (`FECHA_ACORDADA`),
  ADD KEY `PERIODO` (`PERIODO`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `examen`
--
ALTER TABLE `examen`
  ADD CONSTRAINT `ID_COMISION` FOREIGN KEY (`ID_COMISION`) REFERENCES `grupo_comision` (`ID`),
  ADD CONSTRAINT `RUT_` FOREIGN KEY (`RUT_ESTUDIANTE`) REFERENCES `estudiante` (`RUT_ESTUDIANTE`);

--
-- Constraints for table `grupo_comision`
--
ALTER TABLE `grupo_comision`
  ADD CONSTRAINT `ID_EXAMEN` FOREIGN KEY (`ID_EXAMEN`) REFERENCES `examen` (`ID`),
  ADD CONSTRAINT `RUT_MIEMBRO` FOREIGN KEY (`RUT_MIEMBRO`) REFERENCES `comision` (`RUT`);

--
-- Constraints for table `solicitud`
--
ALTER TABLE `solicitud`
  ADD CONSTRAINT `FECHA_ACORDADA` FOREIGN KEY (`FECHA_ACORDADA`) REFERENCES `disponibilidad` (`FECHA`),
  ADD CONSTRAINT `PERIODO` FOREIGN KEY (`PERIODO`) REFERENCES `disponibilidad` (`PERIODO`),
  ADD CONSTRAINT `RUT_ESTUDIANTE` FOREIGN KEY (`RUT_ESTUDIANTE`) REFERENCES `estudiante` (`RUT_ESTUDIANTE`);
COMMIT;
