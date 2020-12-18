using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TSX.Learn.NetCore
{
    public class AsyncAwaitEx1
    {
        public async void Run()
        {
            Console.WriteLine("Starting Run");
            var t1 = PrintMessage("t1", 5000);
            var t2 = PrintMessage("t2", 8000);
            var t3 = PrintMessage("t3", 11000);
            Console.WriteLine("Run Completed!");
        }

        public async Task PrintMessage(string message, int delay)
        {
            await Task.Delay(delay);
            Console.WriteLine("Printing Message: " + message);
        }
    }
}
