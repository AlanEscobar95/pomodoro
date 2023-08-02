-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-08-2023 a las 18:54:20
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pomodoro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `idGrupos` int(11) NOT NULL,
  `idMiembros` int(11) NOT NULL,
  `nombreGrupo` varchar(99) DEFAULT NULL,
  `descripcionGrupo` varchar(1500) DEFAULT NULL,
  `crearGrupo` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarGrupo` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miembros`
--

CREATE TABLE `miembros` (
  `idMiembros` int(11) NOT NULL,
  `nombreMiembro` varchar(99) DEFAULT NULL,
  `crearMiembro` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarMiembro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miembros_tareas`
--

CREATE TABLE `miembros_tareas` (
  `idMiembrosTareas` int(11) NOT NULL,
  `idMiembros` int(11) NOT NULL,
  `idTareas` int(11) NOT NULL,
  `crearMiembroTareas` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarMiembroTareas` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pomodoros`
--

CREATE TABLE `pomodoros` (
  `idPomodoros` int(11) NOT NULL,
  `idTareas` int(11) NOT NULL,
  `fechaInicio` datetime DEFAULT NULL,
  `fechaFin` datetime DEFAULT NULL,
  `crearPomodoro` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarPomodoro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_pomodoros`
--

CREATE TABLE `registro_pomodoros` (
  `idRegistro` int(11) NOT NULL,
  `idPomodoros` int(11) NOT NULL,
  `horaInicio` time DEFAULT NULL,
  `horaFin` time DEFAULT NULL,
  `incidencia` varchar(255) DEFAULT NULL,
  `crearRegistro` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarRegistro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idRoles` int(11) NOT NULL,
  `nombreRol` varchar(99) DEFAULT NULL,
  `crearRol` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarRol` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('TBgrTqCncGwXzpOGiSed_yLMM_Ql8hU_', 1691081639, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `idTareas` int(11) NOT NULL,
  `nombreTarea` varchar(255) DEFAULT NULL,
  `descripcionTarea` varchar(1500) DEFAULT NULL,
  `estadoTarea` varchar(50) DEFAULT NULL,
  `crearTarea` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarTarea` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` int(11) NOT NULL,
  `idRoles` int(11) NOT NULL,
  `correoUsuario` varchar(255) DEFAULT NULL,
  `nombreUsuario` varchar(99) DEFAULT NULL,
  `passwordUsuario` varchar(255) DEFAULT NULL,
  `crearUsuario` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarUsuario` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`idGrupos`),
  ADD KEY `idMiembros` (`idMiembros`);

--
-- Indices de la tabla `miembros`
--
ALTER TABLE `miembros`
  ADD PRIMARY KEY (`idMiembros`);

--
-- Indices de la tabla `miembros_tareas`
--
ALTER TABLE `miembros_tareas`
  ADD PRIMARY KEY (`idMiembrosTareas`),
  ADD KEY `idMiembros` (`idMiembros`),
  ADD KEY `idTareas` (`idTareas`);

--
-- Indices de la tabla `pomodoros`
--
ALTER TABLE `pomodoros`
  ADD PRIMARY KEY (`idPomodoros`),
  ADD KEY `idTareas` (`idTareas`);

--
-- Indices de la tabla `registro_pomodoros`
--
ALTER TABLE `registro_pomodoros`
  ADD PRIMARY KEY (`idRegistro`),
  ADD KEY `idPomodoros` (`idPomodoros`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRoles`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`idTareas`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuarios`),
  ADD KEY `idRoles` (`idRoles`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `idGrupos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `miembros`
--
ALTER TABLE `miembros`
  MODIFY `idMiembros` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `miembros_tareas`
--
ALTER TABLE `miembros_tareas`
  MODIFY `idMiembrosTareas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pomodoros`
--
ALTER TABLE `pomodoros`
  MODIFY `idPomodoros` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro_pomodoros`
--
ALTER TABLE `registro_pomodoros`
  MODIFY `idRegistro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idRoles` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `idTareas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuarios` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD CONSTRAINT `grupos_ibfk_1` FOREIGN KEY (`idMiembros`) REFERENCES `miembros` (`idMiembros`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `miembros_tareas`
--
ALTER TABLE `miembros_tareas`
  ADD CONSTRAINT `miembros_tareas_ibfk_1` FOREIGN KEY (`idMiembros`) REFERENCES `miembros` (`idMiembros`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `miembros_tareas_ibfk_2` FOREIGN KEY (`idTareas`) REFERENCES `tareas` (`idTareas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pomodoros`
--
ALTER TABLE `pomodoros`
  ADD CONSTRAINT `pomodoros_ibfk_1` FOREIGN KEY (`idTareas`) REFERENCES `tareas` (`idTareas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `registro_pomodoros`
--
ALTER TABLE `registro_pomodoros`
  ADD CONSTRAINT `registro_pomodoros_ibfk_1` FOREIGN KEY (`idPomodoros`) REFERENCES `pomodoros` (`idPomodoros`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idRoles`) REFERENCES `roles` (`idRoles`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
