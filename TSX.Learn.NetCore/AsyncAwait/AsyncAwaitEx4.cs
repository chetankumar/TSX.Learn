using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TSX.Learn.NetCore
{

    // Perils of void returning async
    public class AsyncAwaitEx4
    {
        string message = null;

        public async void Run()
        {
            Console.WriteLine("Starting Run");
            try
            {
                PopulateMessage();
                Console.WriteLine("Message populated!");
            }
            catch(Exception ex)
            {
                Console.WriteLine("Message could not be populated");
            }
            Console.WriteLine("Completing Run with: "+message+" !!");
        }

        public async void PopulateMessage()
        {
            this.message = await MakeDBCallForMessage();
            Console.WriteLine("DB Call complete, continuing....");
        }

        public async Task<string> MakeDBCallForMessage()
        {
            await Task.Delay(5000);
            throw new Exception();
        }
    }
}
