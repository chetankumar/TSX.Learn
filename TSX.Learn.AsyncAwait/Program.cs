using System;
using TSX.Learn.AsyncAwait;

namespace TSX.Learn.NetCore
{
    class Program
    {
        static void Main(string[] args)
        {
            string taskName = "";
            while(taskName != "q")
			{
                Console.WriteLine("Which example do you want to run? type q to end");
                taskName = Console.ReadLine();
                switch (taskName)
                {
                    case "1":
                        new AsyncAwaitEx1().Run();
                        break;
                    case "2":
                        new AsyncAwaitEx2().Run();
                        break;
                    case "3":
                        new AsyncAwaitEx3().Run();
                        break;
                    case "4":
                        new AsyncAwaitEx4().Run();
                        break;
                    case "5":
                        new AsyncAwaitEx5().Run();
                        break;
                    case "6":
                        var task6 = new AsyncAwaitEx6().Run();
                        task6.Wait();
                        break;
                    case "7":
                        var task7 = new AsyncAwaitEx7().Run();
                        task7.Wait();
                        break;
                    case "8":
                        var p1 = new ParallelExample();
                        p1.Run();
                        break;
                    case "9":
                        var p2 = new AsyncExample();
                        p2.Run();
                        break;
                }
                Console.WriteLine("Finished!");
                Console.WriteLine("____________________________________________");
                Console.WriteLine();
                Console.WriteLine();
                Console.Read();
            }
        }
    }
}
