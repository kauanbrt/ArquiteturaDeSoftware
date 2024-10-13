import { Turma } from "./Turma";

export function TurmaPresencial(codigo, nota, frequencia){
    const turma = Turma(codigo, nota);

    return {
        ...turma,
        aprovado: () => turma.aprovado() && frequencia > 75,
    }
}