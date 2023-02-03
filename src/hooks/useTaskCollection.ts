import { v4 as uuidv4 } from "uuid";
import { ColumnType } from "@/utils/enums";
import { TaskModel } from "@/utils/models";
import { useLocalStorage } from "usehooks-ts";

function useTaskCollection(){
    return useLocalStorage<{
        [key in ColumnType]: TaskModel[];
    }>('tasks', {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Task 1',
                color: 'blue.300',
            }
        ],
        'In Progress': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Task 2',
                color: 'blue.300',
            }
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Task 1',
                color: 'blue.300',
            }
        ],
        Completed: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Task 1',
                color: 'blue.300',
            }
        ]
    });
}

export default useTaskCollection;