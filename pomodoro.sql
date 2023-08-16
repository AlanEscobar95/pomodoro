-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-08-2023 a las 01:55:09
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
  `id` int(11) NOT NULL,
  `nombre` varchar(99) DEFAULT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `crearGrupo` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarGrupo` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miembros`
--

CREATE TABLE `miembros` (
  `id` int(11) NOT NULL,
  `grupoId` int(11) NOT NULL,
  `pomodorosId` int(11) NOT NULL,
  `nombre` varchar(99) DEFAULT NULL,
  `crearMiembro` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarMiembro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miembros-tareas`
--

CREATE TABLE `miembros-tareas` (
  `id` int(11) NOT NULL,
  `tareasId` int(11) NOT NULL,
  `miembrosId` int(11) NOT NULL,
  `crearMiembrosTareas` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarMiembrosTareas` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pomodoros`
--

CREATE TABLE `pomodoros` (
  `id` int(11) NOT NULL,
  `registroPomodorosId` int(11) NOT NULL,
  `fechaInicio` datetime DEFAULT NULL,
  `fechaFin` datetime DEFAULT NULL,
  `crearPomodoro` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarPomodoro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro-pomodoros`
--

CREATE TABLE `registro-pomodoros` (
  `id` int(11) NOT NULL,
  `horaInicio` time DEFAULT NULL,
  `horaFin` time DEFAULT NULL,
  `incidencia` varchar(255) DEFAULT NULL,
  `crearRegistro` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarRegistro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(99) DEFAULT NULL,
  `crearRol` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarRol` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `user` varchar(255) NOT NULL,
  `crearTarea` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarTarea` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `nombre`, `descripcion`, `estado`, `user`, `crearTarea`, `actualizarTarea`) VALUES
(13, 'Crear un formulario', 'Crear', 'Pendiente', '5', '2023-08-10 00:38:56', '2023-08-10 00:38:56'),
(14, 'Nueva Tarea', 'Hola', 'En proceso', '5', '2023-08-10 00:40:17', '2023-08-10 00:40:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(99) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `crearUsuario` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarUsuario` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `password`, `crearUsuario`, `actualizarUsuario`) VALUES
(5, 'Alan', 'arp.escobar@yavirac.edu.ec', '$2b$10$SIrdudJOMR/ELqyzDTZEFOVFM5lAw4aB2oakCjvHJ/OFf7WiCMsc.', '2023-08-09 00:23:38', '2023-08-09 00:23:38'),
(6, 'Alan Escobar', 'alanescobar.p@gmail.com', '$2b$10$ywmy62yjbJfVYV7SAwi/2OXxLLxuCZlWFsMJSNzCFYsTgotFqYQ5K', '2023-08-09 01:19:07', '2023-08-09 01:19:07'),
(7, 'alan', 'alan@gmail.com', '$2b$10$sQqf5JcxMiehK.ygYgjEe.Tu7LYo6xSFp57/5PjZoqBv2Zf2Ov/G.', '2023-08-09 02:43:26', '2023-08-09 02:43:26'),
(8, 'Alan', 'alanescobar@gmail.com', '$2b$10$P1pe/4Ba0vRHWcrLQSArxufT3YPb8HAM.RzvVgiyhqOluXQa99mfa', '2023-08-10 03:17:46', '2023-08-10 03:17:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios-roles`
--

CREATE TABLE `usuarios-roles` (
  `id` int(11) NOT NULL,
  `crearUsuarioRol` timestamp NOT NULL DEFAULT current_timestamp(),
  `actualizarUsuarioRol` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuarioId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `miembros`
--
ALTER TABLE `miembros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `grupoId` (`grupoId`),
  ADD KEY `pomodorosId` (`pomodorosId`);

--
-- Indices de la tabla `miembros-tareas`
--
ALTER TABLE `miembros-tareas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tareasId` (`tareasId`,`miembrosId`),
  ADD KEY `miembrosId` (`miembrosId`);

--
-- Indices de la tabla `pomodoros`
--
ALTER TABLE `pomodoros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `registroPomodorosId` (`registroPomodorosId`);

--
-- Indices de la tabla `registro-pomodoros`
--
ALTER TABLE `registro-pomodoros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios-roles`
--
ALTER TABLE `usuarios-roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `miembros`
--
ALTER TABLE `miembros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `miembros-tareas`
--
ALTER TABLE `miembros-tareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pomodoros`
--
ALTER TABLE `pomodoros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro-pomodoros`
--
ALTER TABLE `registro-pomodoros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios-roles`
--
ALTER TABLE `usuarios-roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `miembros`
--
ALTER TABLE `miembros`
  ADD CONSTRAINT `miembros_ibfk_1` FOREIGN KEY (`grupoId`) REFERENCES `grupos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `miembros_ibfk_2` FOREIGN KEY (`pomodorosId`) REFERENCES `pomodoros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `miembros-tareas`
--
ALTER TABLE `miembros-tareas`
  ADD CONSTRAINT `miembros-tareas_ibfk_1` FOREIGN KEY (`miembrosId`) REFERENCES `miembros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `miembros-tareas_ibfk_2` FOREIGN KEY (`tareasId`) REFERENCES `tareas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pomodoros`
--
ALTER TABLE `pomodoros`
  ADD CONSTRAINT `pomodoros_ibfk_1` FOREIGN KEY (`registroPomodorosId`) REFERENCES `registro-pomodoros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios-roles`
--
ALTER TABLE `usuarios-roles`
  ADD CONSTRAINT `usuarios-roles_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios-roles_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
