export default function parse(input: string): {conf: string[][], moves: string[]} {
    const [_conf, moves] = input.split(/\n\n/).reduce(
        (acc, v) => {
            if (!v) {
                return acc;
            }

            acc.push(v);
            return acc;
        },
        [] as string[],
    );

    const confSpl = _conf.split('\n')

    // const cleanConf = confSpl.slice(0, confSpl.length - 1)
    //         .map(x => x.replace(/(\s{3})/,''))
    //         .map(c => c.split(' '));
    //
    // const res: string[][] = new Array(cleanConf.length).fill(null).map(() => [])
    //
    // for (let r = 0; r < cleanConf.length; r ++) {
    //     for (let c = 0; c < cleanConf[r].length; c ++) {
    //         if (cleanConf[r][c]) {
    //             try {
    //                 res[c].unshift(cleanConf[r][c])
    //             } catch (e) {
    //                 console.log(c, res)
    //                 throw new Error('UH OH')
    //             }
    //         }
    //     }
    // }

    let longest = 0
    const cleanConf = confSpl.slice(0, confSpl.length - 1).reduce((acc, line) => {
        const res = []
        for (let i = 0; i < line.length; i += 4) {
            const slice =  line.slice(i, i+4).trim()

            res.push(slice)
        }
        acc.push(res)

        if(res.length > longest) {
            longest = res.length
        }

        return acc
    }, [] as string[][])

    const conf: string[][] = new Array(longest).fill(null).map(() => [])

    for (let r = 0; r < cleanConf.length; r ++) {
        for (let c = 0; c < cleanConf[r].length; c ++) {
            if (cleanConf[r][c]) {
                try {
                    conf[c].unshift(cleanConf[r][c])
                } catch (e) {
                    console.log(c, conf)
                    throw new Error('UH OH')
                }
            }
        }
    }

    return {
        conf,
        moves: moves.split('\n')
    }
}
