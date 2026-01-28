import type { ITarefa } from "../types/tarefa";

interface Props {
  tarefa: ITarefa;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TarefaItem = ({ tarefa, onDelete, onToggle }: Props) => {
  return (
    <li className="flex items-center justify-between bg-card-bg/50 border border-gray-700 p-4 rounded-xl mb-3 backdrop-blur-sm transition-all hover:border-meu-azul/50">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => onToggle(tarefa.id)}
      >
        {/* Círculo de Check estilo "Taskmaster" */}
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${tarefa.concluida ? "bg-meu-azul border-meu-azul" : "border-gray-500"}`}
        >
          {tarefa.concluida && (
            <div className="w-2 h-2 bg-white rounded-full" />
          )}
        </div>

        <span
          className={`text-lg ${tarefa.concluida ? "text-gray-500 line-through" : "text-gray-200"}`}
        >
          {tarefa.texto}
        </span>
      </div>

      <button
        onClick={() => onDelete(tarefa.id)}
        className="text-gray-500 hover:text-red-400 transition-colors"
      >
        <span className="text-xl">🗑️</span>{" "}
        {/* Ou use o TrashIcon do Heroicons */}
      </button>
    </li>
  );
};
