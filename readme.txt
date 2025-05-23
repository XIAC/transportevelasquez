-- 1. Muestra el peso y volumen total transportado por cada camión, 
-- dentro de un rango de fechas específico. (Proc. almacenado)
DELIMITER //
CREATE PROCEDURE ReporteTransportadoPorCamion(
	IN fecha_inicio DATE,
    IN fecha_final DATE
)
BEGIN 
		SELECT
				c.Matricula,
                SUM(p.Peso) as TotalPesoTransportado,
                SUM(p.Volumen) as TotalVolumenTransportado
        FROM Viaje v 
        JOIN Camion c ON v.Matricula = c.Matricula
		JOIN Pedido p ON p.ViajeNumero = v.Numero
        WHERE v.Fecha between fecha_inicio AND fecha_final
        GROUP BY c.Matricula;
END //
DELIMITER ;
CALL ReporteTransportadoPorCamion ('2025-01-01','2025-01-15');

-- 2. Listas camiones que no realizaron viajes entre dos fechas dadas
DELIMITER //
CREATE PROCEDURE CamionesNoUtilizados(
	IN fecha_inicio DATE,
    IN fecha_final DATE
)
BEGIN 
	SELECT 
		c.Matricula,
		c.MaxPeso,
		c.MaxVolumen
	FROM Camion c 
	WHERE c.Matricula 
		NOT IN (SELECT  v.Matricula FROM Viaje v 
		WHERE v.Fecha between fecha_inicio AND  fecha_final);
END //
DELIMITER ;
CALL CamionesNoUtilizados ('','');

-- 3. Mostrar los pedido que salieron de que ciudad(almacen) a que ciudad (Tienda) durante un mes y anio.
DELIMITER //
CREATE PROCEDURE ReportePedidosPorMesAnio(
	IN anio INT,
    IN mes INT
)
BEGIN 
	SELECT 
		a.Direccion as CiudadOrigen,
		t.Direccion as CiudadDestino,
		COUNT(p.Numero) as TotalPedidos,
		SUM(p.Peso) AS PesoTotal,
		SUM(p.Volumen) As VolumenTotal
	FROM Pedido p 
	JOIN almacen a ON a.Numero = p.AlmacenNumero
	JOIN tienda t ON t.TiendaID = p.TiendaNumero
	JOIN viaje v ON v.Numero = p.ViajeNumero
	WHERE YEAR(v.Fecha) = anio
		AND MONTH(v.Fecha) = mes
	GROUP BY a.Direccion, t.Direccion
	ORDER BY TotalPedidos DESC;
END //
DELIMITER ;
CALL ReportePedidosPorMesAnio (2025, 01);
