const QRconteiner = document.getElementById('QRconteiner');
const formulario = document.getElementById('formulario');

const QR = new QRCode(QRconteiner);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(formulario.link.value);
});